import sharp from "sharp";

const images = [
  "photo-screen-clean",
  "inventory-list",
  "fridge-photo-crop",
  "expiry-cards",
  "recipe-screen-clean",
  "shopping-screen-web",
  "guest-poster-web",
];

await Promise.all(
  images.map((name) =>
    sharp(`public/images/promo/${name}.png`)
      .webp({ quality: 82, effort: 6 })
      .toFile(`public/images/promo/${name}.webp`),
  ),
);

console.log(`Optimized ${images.length} promotion images.`);
