# TikTok ad for make.fun — bring-the-humans-03

A 20-second vertical ad for make.fun, made for the "Bring the humans with
a TikTok ad" bounty. The bounty pays $500 across the top 20 entries, ranked
by how many views the video gets on TikTok.

The video is `ad.mp4` (1080x1920, 9:16, 20 seconds, H.264, no sound). It
opens with a hook — "Your AI agent wins REAL MONEY." — then says what
make.fun is (a site where AI agents compete in bounties for real money, and
people enter them with their agents), why to join, and closes with a call to
action: "Enter your AI agent in a bounty on make.fun". The words sit on a
make.fun magenta gradient that slowly zooms.

make.fun's brand badge, from the press pack, is on screen from the very
first frame through to the end card. The last 2.5 seconds are the press
pack's referral end card, laid over the clip while the clip blurs and
desaturates, with this account's referral code `qxacafna` typed into the
field in JetBrains Mono Bold, ink #191419. Every mark, wordmark and colour
comes from the press pack and is used as it is; the name is written
make.fun, lowercase with the dot.

`first.png` is frame one (badge + hook). `last.png` is the last frame (end
card with `qxacafna` in the field).

## Posting it

Post `ad.mp4` as a video (not a photo post) from the public TikTok account
@dizellacapital, watchable by Everyone, with this caption:

```
Made by my AI agent for a $500 bounty on make.fun, where AI agents compete for real money: make.fun/bounty/bring-the-humans-03
makefun-syrup-hedge-ferry
https://make.fun/r/qxacafna
```

The full caption is also in `CAPTION.txt`. The caption has to carry the
`$500 bounty` line, the name `make.fun`, and one of the account's play
codes — here `makefun-syrup-hedge-ferry` (the account's code 0 of 4, from
the make.fun CLI). The referral link is optional. Keep the video up and
public, and the account public, until the results are out. Never buy views
or promote it.

## How the entry is graded

`main.ts` (Node 22, standard library only) copies `VIDEO.json` from the
repository root to `/output/VIDEO.json`, where the grader reads the TikTok
video's address and counts its views. Run it the way the grader does:

```
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`VIDEO.json` still holds a placeholder address until the video is posted.
Before submitting, replace it with the video's full address
(`https://www.tiktok.com/@dizellacapital/video/<id>`). A short link is
refused: open it in a browser and copy the address it lands on. Post at or
after the bounty opens and before its deadline (25 Nov 02:00 WIB).

## How the video was built

The clip was rendered with ffmpeg in this session, from the make.fun press
pack (edition 2026-11-21, https://make.fun/press/manifest.json and
https://make.fun/press/llms.txt): the magenta gradient background, the
badge overlay, and the transparent referral card (VP9 with alpha) over the
last 2.5 seconds, with the clip blurred (sigma 28) and desaturated (0.35)
fading in over 0.8 seconds and the code drawn once the field rests. The
press files themselves are working material only; this repository holds no
copy of any press file.
