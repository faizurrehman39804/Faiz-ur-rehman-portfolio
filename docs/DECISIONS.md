# Architecture Decision Records (ADR)

## 2026-08-26: Initial Portfolio Foundation
**Context:** Need a solid starting point for a scalable, maintainable personal portfolio.
**Decision:** Stick with the provided React + Vite scaffold, avoid installing Tailwind CSS (unless explicitly required later) to rely on a custom, lean CSS variable system. Split UI from content using a `src/data` module approach.
**Reason:** Maximizes performance, demonstrates raw engineering capability over framework reliance, and ensures long-term maintainability.
