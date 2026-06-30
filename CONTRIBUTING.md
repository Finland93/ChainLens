# Contributing to ChainLens

Thanks for your interest in improving ChainLens! This guide explains how to contribute effectively.

## How can I contribute?

### 🐛 Report bugs
- Use the [Bug Report](../../issues/new?template=bug_report.md) template
- Include: token address, chain, browser, what happened vs. what you expected
- Screenshots help a lot

### 💡 Suggest features
- Use the [Feature Request](../../issues/new?template=feature_request.md) template
- Explain the problem your feature solves, not just the feature itself

### 🔧 Submit code
1. Fork the repository
2. Create a branch: `git checkout -b fix/description` or `feat/description`
3. Make your changes
4. Test with multiple tokens on multiple chains
5. Open a Pull Request

### 🌍 Translations
- Help translate the UI to reach more people
- Open an issue first to coordinate

## Development setup

```bash
git clone https://github.com/Finland93/ChainLens.git
cd ChainLens
# No dependencies, no build step — pure HTML/CSS/JS
python3 -m http.server 8000
# Open http://localhost:8000
```

## Code guidelines

### General
- No build tools, no frameworks, no npm — keep it vanilla
- All JS in `js/`, one file per concern
- Mobile-first CSS in `css/core.css`

### JavaScript
- Use `'use strict'` in every module
- Wrap modules in an IIFE: `(function(){ ... })();`
- Handle ALL API failures with `.catch()` — never let a scan crash
- Log API success/failure through the API layer for the transparency tab

### CSS
- Use the CSS variables from `:root` — never hardcode colors
- Mobile-first: base styles, then `@media (min-width)` for larger screens
- WCAG AA contrast minimum (4.5:1 for text, 3:1 for large text)

### Analysis changes
- Every check must have: `n` (name), `ok` (bool/null), `d` (description), `lv` (level)
- Levels: `'good'`, `'info'`, `'warning'`, `'danger'`, `'critical'`
- Update the check count in the README if you add/remove checks
- Test with: a legit token, an obvious scam, and an edge case (no data)

## Testing checklist

Before opening a PR, verify:

- [ ] `node --check js/FILE.js` passes for every changed JS file
- [ ] CSS braces are balanced (`grep -c '{' css/core.css` == `grep -c '}' css/core.css`)
- [ ] Scan works on Solana (try BONK)
- [ ] Scan works on Ethereum (try PEPE)
- [ ] Scan works on BNB Chain (try CAKE)
- [ ] Scan works on Base (try BRETT)
- [ ] Rate limit still works (rapid scans show the cooldown message)
- [ ] Offline detection still works
- [ ] Mobile layout is not broken (test at 375px width)
- [ ] No console errors during a normal scan

## Pull request process

1. Fill out the PR description completely
2. Reference any related issues
3. One PR per concern — don't mix unrelated changes
4. Be patient and constructive in review discussions

## Code of conduct

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md). Be respectful — we're all here to make crypto safer.

## Questions?

Open a [Discussion](../../discussions) or an [Issue](../../issues) for anything that isn't a confirmed bug.
