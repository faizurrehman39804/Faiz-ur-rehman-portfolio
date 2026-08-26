# Performance Guidelines

## Principles
1. **Asset Optimization:** Images must be compressed and sized appropriately. SVG is preferred for icons.
2. **Minimal Dependencies:** Do not add third-party libraries for minor visual effects. Rely on native CSS and browser APIs.
3. **Lazy Loading:** Consider lazy loading below-the-fold sections or heavy components if the initial bundle size grows too large.
4. **Rendering Efficiency:** Avoid unnecessary React re-renders by structuring state locally where possible.
