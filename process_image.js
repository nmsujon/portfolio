const fs = require('fs');
const path = require('path');
const sharp = require(path.join(process.cwd(), 'node_modules/sharp'));

const origPath = path.join(process.cwd(), 'public/assets/my1_original.png');
const outputPath = path.join(process.cwd(), 'public/assets/my1.png');

async function processImage() {
  try {
    const { data, info } = await sharp(origPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    console.log(`Processing image: ${width}x${height}, channels: ${channels}`);

    const outputBuffer = Buffer.from(data);

    // Fade starts lower down at 60% height and reaches 0 opacity at 88% height
    const fadeStart = height * 0.60;
    const fadeEnd = height * 0.88;

    for (let y = 0; y < height; y++) {
      let bottomAlphaFactor = 1.0;

      if (y >= fadeEnd) {
        bottomAlphaFactor = 0.0;
      } else if (y > fadeStart) {
        const progress = (y - fadeStart) / (fadeEnd - fadeStart);
        // Smooth cubic ease-out fade curve
        bottomAlphaFactor = Math.pow(1 - progress, 2);
      }

      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        const r = data[idx];
        const g = data[idx + 1];
        const b = data[idx + 2];
        let a = data[idx + 3];

        // Background removal logic
        const minVal = Math.min(r, g, b);
        const maxVal = Math.max(r, g, b);
        const diff = maxVal - minVal;

        const isWhiteBg = minVal > 220 && diff < 25;
        const isNearWhite = minVal > 190 && diff < 35;

        if (isWhiteBg) {
          a = 0;
        } else if (isNearWhite) {
          const alphaRatio = Math.max(0, (230 - minVal) / 40);
          a = Math.floor(a * alphaRatio);
        }

        // Apply bottom vertical fade
        a = Math.floor(a * bottomAlphaFactor);

        outputBuffer[idx + 3] = a;
      }
    }

    const tempPath = path.join(process.cwd(), 'public/assets/my1_processed.png');
    await sharp(outputBuffer, {
      raw: {
        width,
        height,
        channels: 4
      }
    })
    .png()
    .toFile(tempPath);

    fs.copyFileSync(tempPath, outputPath);
    console.log('Successfully updated my1.png with lower fade start (more torso visible)!');
  } catch (err) {
    console.error('Error processing image:', err);
  }
}

processImage();
