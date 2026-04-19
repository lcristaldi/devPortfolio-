// One-shot script: crop the avatar to a face-square and emit favicon sizes.
// Run with: node scripts/build-favicons.js
import sharp from "sharp";
import path from "node:path";

const SRC = path.resolve("src/assets/danny.png"); // 1024x1536
// Tight square around the face — the painted portrait's eyes sit ~y=270,
// chin ~y=560, so this 870x870 crop keeps the whole head + bunny glasses.
const FACE = { left: 75, top: 40, width: 870, height: 870 };

const sizes = [
  { name: "icon-512.png", size: 512 },
  { name: "icon-192.png", size: 192 },
  { name: "apple-touch-icon.png", size: 180 },
  { name: "favicon-32.png", size: 32 },
];

const base = sharp(SRC).extract(FACE);

await Promise.all(
  sizes.map(({ name, size }) =>
    base
      .clone()
      .resize(size, size, { fit: "cover" })
      .png({ compressionLevel: 9 })
      .toFile(path.resolve("public", name))
  )
);

console.log("favicons written:", sizes.map((s) => s.name).join(", "));
