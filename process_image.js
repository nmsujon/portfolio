const fs = require('fs');
const path = require('path');
const sharp = require(path.join(process.cwd(), 'node_modules/sharp'));

const origPath = 'C:/Users/df/.gemini/antigravity/brain/cede3674-0c22-49ee-a962-9925ecd8c2a0/.user_uploaded/media_1785868781937.png';
const outputPath = path.join(process.cwd(), 'public/assets/my1.png');

async function processImage() {
  try {
    const { data, info } = await sharp(origPath)
      .ensureAlpha()
      .raw()
      .toBuffer({ resolveWithObject: true });

    const { width, height, channels } = info;
    console.log(`Processing original clean image: ${width}x${height}`);

    const outputBuffer = Buffer.from(data);

    // Fade starts at 68% height and reaches 0 opacity at 95% height
    const fadeStart = height * 0.68;
    const fadeEnd = height * 0.95;

    for (let y = 0; y < height; y++) {
      let bottomAlphaFactor = 1.0;

      if (y >= fadeEnd) {
        bottomAlphaFactor = 0.0;
      } else if (y > fadeStart) {
        const progress = (y - fadeStart) / (fadeEnd - fadeStart);
        bottomAlphaFactor = Math.pow(1 - progress, 2);
      }

      for (let x = 0; x < width; x++) {
        const idx = (y * width + x) * 4;
        let a = data[idx + 3];

        // Apply ONLY bottom vertical fade mask to alpha
        a = Math.floor(a * bottomAlphaFactor);

        outputBuffer[idx + 3] = a;
      }
    }

    await sharp(outputBuffer, {
      raw: { width, height, channels: 4 }
    })
    .png()
    .toFile(outputPath);

    // Copy to all asset aliases
    fs.copyFileSync(outputPath, path.join(process.cwd(), 'public/assets/designer1.png'));
    fs.copyFileSync(outputPath, path.join(process.cwd(), 'public/assets/1.png'));
    fs.copyFileSync(outputPath, path.join(process.cwd(), 'public/assets/my_1.png'));

    console.log('PERFECT! Updated my1.png without touching shirt colors!');
  } catch (err) {
    console.error('Error:', err);
  }
}

processImage();
