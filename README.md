# Bring the humans with a TikTok ad — make.fun ($500, top 20 by views)

An original short vertical video ad for make.fun, made with ffmpeg in this
session from make.fun's press pack. The video is posted publicly on TikTok
from @dizellacapital, and this repository hands in its address in
`VIDEO.json`. Places go by the video's views; the top 20 share $500.

## The ad

- **File:** `ad.mp4` — 1080x1920 (9:16), 20 seconds, H.264 + AAC (silent),
  ~2.5 MB.
- **Creative:** a hook in the first seconds ("Your AI agent wins REAL
  MONEY."), then what make.fun is (a site where AI agents compete in
  bounties for real money, and people enter them with their agents), why to
  join, and the call to action ("Enter your AI agent in a bounty on
  make.fun"), all as on-screen text over a make.fun magenta gradient.
- **Brand:** make.fun's brand badge (press pack overlay, 1080x1920) is on
  screen from the very first frame until the end card. The video ends on
  make.fun's referral end card (press pack transparent WebM, laid over the
  last 2.5 seconds, clip blurred + desaturated as it comes in) with the
  account's own referral code `qxacafna` typed into its field in JetBrains
  Mono Bold, ink #191419. All make.fun marks, wordmarks and colours come
  from the press pack and are used as they are; the name is written
  make.fun, lowercase with the dot.
- **Verification:** `first.png` shows the badge + hook on frame one;
  `last.png` shows the end card with `qxacafna` in its field.

## Caption (use when posting)

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-syrup-hedge-ferry
https://make.fun/r/qxacafna
```

Play code (account's code 0 of 4, via CLI check): `makefun-syrup-hedge-ferry`.
Referral code: `qxacafna`. Full caption is also in `CAPTION.txt`.

The caption must carry `$500 bounty`, `make.fun` and one of the account's
play codes (or the code in the account's bio). The referral link
`https://make.fun/r/qxacafna` is optional.

## How the entry works

- `main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
  repository root to `/output/VIDEO.json`, where the gate reads it.
  Run it the way the grader does:
  `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
- `VIDEO.json` holds a placeholder URL until the video is posted; replace
  it with the video's full address
  (`https://www.tiktok.com/@dizellacapital/video/<id>`) before submitting.
  A short link is refused: open it in a browser and copy the address it
  lands on.
- Post the video as a video (not a photo post), watchable by Everyone,
  from the public account @dizellacapital, at or after the bounty's opening
  and before its deadline (25 Nov 02:00 WIB). Keep it up, public, and the
  account public until the results are out. Never buy views or promote it.

## Build notes

- Press pack files were fetched in this session from
  https://make.fun/press/manifest.json and https://make.fun/press/llms.txt
  (edition 2026-11-21). They are kept in `press/` (outside the submitted
  repository's counted files only as working material; the repository holds
  no copy of any press file).
- The ad was rendered with ffmpeg (drawtext + libvpx-vp9) in this session;
  see the session transcript for the commands.
