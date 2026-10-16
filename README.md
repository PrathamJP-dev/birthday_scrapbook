# Nidhi's Birthday Site

Plain HTML/CSS/JS, no build step.

## Files
- `index.html`  page content: notes, wishes, captions, meme text (search for the text and edit it)
- `style.css`   all styling and colours (variables at the top, `:root`)
- `config.js`   name and the hashed birthdate password
- `script.js`   lock logic, age calculation, confetti
- `images/`     put `photo1.jpg` ... `photo10.jpg` here

## Adding photos
Save images as `images/photo1.jpg` to `images/photo10.jpg`. They fill the frames automatically (cropped to fit).
Missing file = the emoji/meme card stays. Other extensions: change the `src` in `index.html`.
Slots: 1 hero, 2 arch, 3 round, 4-6 row of three, 7-10 grid of four.
Tip: resize photos to about 1200px wide to keep the site fast.

## Run locally
The lock uses `crypto.subtle`, which needs https or localhost, so don't double-click the file.
Use VS Code "Live Server", or run `npx serve` / `python3 -m http.server` in this folder.

## Deploy on Vercel
1. Push this folder to a GitHub repo (or run `npx vercel` in the folder).
2. Import the repo on vercel.com, Framework Preset: Other, no build command, output directory: `.`
3. Share the vercel.app link.

## Privacy notes
- Birthdate is stored only as a SHA-256 hash, but the photos and notes are still public files on the URL. Anyone with the exact image URL can open it without the password.
- For real privacy, use Vercel Deployment Protection (password) or keep the repo private and share the link only with her.
- Add `<meta name="robots" content="noindex">` in `index.html` `<head>` so search engines skip it.
