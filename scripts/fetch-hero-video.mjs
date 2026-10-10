import { createWriteStream } from "node:fs";
import { mkdir } from "node:fs/promises";
import { pipeline } from "node:stream/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outDir = path.join(__dirname, "..", "public", "videos");
const outFile = path.join(outDir, "hero.mp4");

const candidates = [
  // Pexels download redirects (royalty-free)
  "https://www.pexels.com/download/video/12350372/",
  "https://www.pexels.com/download/video/31262058/",
  "https://www.pexels.com/download/video/2491284/",
  // Known Pexels CDN patterns (may work without auth)
  "https://videos.pexels.com/video-files/12350372/12350372-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/31262058/31262058-uhd_2560_1440_25fps.mp4",
  "https://videos.pexels.com/video-files/2491284/2491284-hd_1920_1080_25fps.mp4",
];

const ua =
  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36";

async function tryDownload(url) {
  console.log("Trying", url);
  const res = await fetch(url, {
    headers: {
      "User-Agent": ua,
      Referer: "https://www.pexels.com/",
      Accept: "*/*",
    },
    redirect: "follow",
  });
  if (!res.ok) {
    console.log("  status", res.status);
    return false;
  }
  const type = res.headers.get("content-type") || "";
  const len = Number(res.headers.get("content-length") || 0);
  console.log("  type", type, "len", len || "unknown");
  if (!type.includes("video") && !type.includes("octet-stream") && len < 100000) {
    // might still be a video without content-type
    const buf = Buffer.from(await res.arrayBuffer());
    if (buf.length < 200000) {
      console.log("  too small", buf.length);
      return false;
    }
    await mkdir(outDir, { recursive: true });
    const { writeFile } = await import("node:fs/promises");
    await writeFile(outFile, buf);
    console.log("  saved", outFile, buf.length);
    return true;
  }
  await mkdir(outDir, { recursive: true });
  await pipeline(res.body, createWriteStream(outFile));
  const { stat } = await import("node:fs/promises");
  const size = (await stat(outFile)).size;
  console.log("  saved", outFile, size);
  return size > 200000;
}

for (const url of candidates) {
  try {
    if (await tryDownload(url)) {
      console.log("OK");
      process.exit(0);
    }
  } catch (e) {
    console.log("  error", e.message);
  }
}

console.error("ALL_FAILED");
process.exit(1);
