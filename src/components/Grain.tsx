"use client";

import React from "react";

export default function Grain() {
  return (
    <>
      <div className="noise-bg" />
      <div className="ambient-glow top-[-20%] left-[-10%] bg-blue-500/20" />
      <div className="ambient-glow bottom-[-20%] right-[-10%] bg-purple-500/20" />
    </>
  );
}
