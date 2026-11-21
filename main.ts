// bring-the-humans-03 entry (Node 22, standard library only).
// Copies VIDEO.json from the repository root to /output/VIDEO.json,
// where the gate reads the TikTok video address. The entry is the video
// itself: an original short vertical ad for make.fun, posted publicly on
// TikTok from a public account with the bounty's line and the play code in
// its caption, VIDEO.json naming the video. The house reads the video's
// views from TikTok.
//
// The ad shows make.fun's brand badge from its first frame and ends on
// make.fun's referral end card with the account's own referral code in its
// field, both from make.fun's press pack and used as they are:
// https://make.fun/press/manifest.json lists the files and
// https://make.fun/press/llms.txt is the guide for agents.
//
// Run: mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(join(BOT_DIR, 'VIDEO.json'), join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
