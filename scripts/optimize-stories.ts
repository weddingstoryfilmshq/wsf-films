import sharp from "sharp";
import fs from "fs/promises";
import path from "path";

const STORIES_DIR = path.join(process.cwd(), "public", "stories");

const WIDTH = 1080;
const HEIGHT = 1920;
const QUALITY = 80;

async function optimizeStories() {
  const files = (await fs.readdir(STORIES_DIR))
    .filter((file) => /\.(jpg|jpeg|png)$/i.test(file))
    .sort((a, b) => {
      const aNum = Number(a.replace(/\D/g, ""));
      const bNum = Number(b.replace(/\D/g, ""));
      return aNum - bNum;
    });

  let beforeSize = 0;
  let afterSize = 0;

  console.log(`\nOptimizing ${files.length} story images...\n`);

  for (const file of files) {
    const filePath = path.join(STORIES_DIR, file);

    const statBefore = await fs.stat(filePath);
    beforeSize += statBefore.size;

    const image = sharp(filePath);

    await image
      .resize(WIDTH, HEIGHT, {
        fit: "cover",
        position: "centre",
      })
      .jpeg({
        quality: QUALITY,
        mozjpeg: true,
      })
      .toFile(filePath + ".tmp");

    await fs.unlink(filePath);
    await fs.rename(filePath + ".tmp", filePath);

    const statAfter = await fs.stat(filePath);
    afterSize += statAfter.size;

    console.log(`✓ ${file}`);
  }

  console.log("\n--------------------------------");
  console.log(
    `Before : ${(beforeSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `After  : ${(afterSize / 1024 / 1024).toFixed(2)} MB`
  );
  console.log(
    `Saved  : ${(
      ((beforeSize - afterSize) / beforeSize) *
      100
    ).toFixed(1)}%`
  );
  console.log("--------------------------------\n");
}

optimizeStories().catch(console.error);