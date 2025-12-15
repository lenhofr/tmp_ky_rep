# nkyrep

Static single-page campaign site (placeholders for now).

## Run locally

From the project folder:

```zsh
cd /Users/robl/dev/static/nkyrep
python3 -m http.server 5173
```

Then open:
- http://localhost:5173/

Compare the alternate design:
- http://localhost:5173/optionA/

Compare the Kentucky-themed design:
- http://localhost:5173/moreKentucky/

## Replace placeholders

- Candidate name, district, and slogan: `index.html`
- Hero image / headshot: replace files in `assets/` and update `index.html`
- Endorsements: `index.html` (Endorsements section)
- Paid-for-by disclaimer: `index.html` (Footer → Disclosure TODO)
