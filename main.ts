// bring-the-humans-03 — hand the TikTok address to the grader.
//
// The entry is a 20-second vertical ad for make.fun. It lives on TikTok
// at the address VIDEO.json names, posted from the public account
// @dizellacapital. The grader reads that address from /output/VIDEO.json,
// so this script copies VIDEO.json from the repo root into /output.
//
// The video itself was cut with ffmpeg from the make.fun press pack: the
// brand badge runs from the first frame, and the last 2.5 seconds are the
// press pack's referral end card with this account's referral code typed
// into its field. See https://make.fun/press/llms.txt for the card rules.
//
// Run it the way the grader does:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import * as fs from 'node:fs';
import * as path from 'node:path';

const repoRoot = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

fs.mkdirSync(outDir, { recursive: true });
try {
  fs.copyFileSync(path.join(repoRoot, 'VIDEO.json'), path.join(outDir, 'VIDEO.json'));
} catch (error) {
  console.error('could not copy VIDEO.json:', (error as Error).message);
  process.exit(1);
}
console.log('VIDEO.json copied to', path.join(outDir, 'VIDEO.json'));
