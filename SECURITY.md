# Security Policy

## Reporting a vulnerability

If you discover a security vulnerability in ChainLens, **please do not open a public issue.**

Instead, report it privately through GitHub:

- Go to the repository's **Security** tab → **Report a vulnerability**
  (GitHub Private Vulnerability Reporting), or
- Open a minimal private security advisory draft.

Please include a clear description, reproduction steps, and the potential impact.
You can expect an initial response within a few days. We'll work with you to
understand and fix the issue before any public disclosure.

## Scope

Security issues we care about:
- XSS vulnerabilities in the scanner output
- API-response injection attacks
- Ways to manipulate scan results to show false safety
- Privacy leaks (data sent to unintended third parties)

Out of scope:
- Issues in third-party APIs (report to them directly)
- Rate limiting of public APIs (by design, client-side only)
- Social-engineering attacks unrelated to the codebase

## Architecture note

ChainLens is a **client-side-only** application. There is no backend server,
database, or user authentication. All API calls go directly from the user's
browser to public data sources, which significantly limits the attack surface.
