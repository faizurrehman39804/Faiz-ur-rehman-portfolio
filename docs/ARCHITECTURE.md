# Engineering Architecture

## Tech Stack
- **Framework:** React 19 (Client-Side Rendering)
- **Build Tool:** Vite
- **Styling:** Vanilla CSS (Custom Design System)

## Principles
1. **Separation of Concerns:** UI components should be stateless where possible. Portfolio content (projects, skills, experience) must reside in the `src/data/` directory.
2. **Component Modularity:** Components must have a single responsibility. Large components must be refactored into smaller, reusable pieces.
3. **No Unnecessary Dependencies:** External libraries are strictly limited. We prioritize native web APIs and native CSS for styling and animations over heavy third-party packages.

## Directory Structure
- `src/components/`: Reusable, isolated UI components (e.g., Button, Card).
- `src/sections/`: High-level layout components that assemble smaller components (e.g., Hero, ProjectsSection).
- `src/data/`: Static data structures containing the content for the portfolio.
- `src/styles/`: Global stylesheets and CSS variables.
