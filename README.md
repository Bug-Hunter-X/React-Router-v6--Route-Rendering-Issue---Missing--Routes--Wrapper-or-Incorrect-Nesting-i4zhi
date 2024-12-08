# React Router v6 Route Rendering Issue

This repository demonstrates a common error in React Router v6 related to route rendering. The issue arises from improperly nesting routes or omitting the `<Routes>` component, leading to unexpected behavior, primarily when dealing with nested routes.

## Problem
The original `bug.js` file showcases a scenario where routes are not enclosed within the `<Routes>` component, resulting in routes failing to render as expected. Nested routes may also not render correctly in this scenario.

## Solution
The corrected code in `bugSolution.js` ensures all routes are correctly nested within the `<Routes>` component. This resolves the rendering issue and ensures all routes function as intended.

## How to Reproduce
1. Clone the repository.
2. Run `npm install`.
3. Run `npm start`.
4. Observe the incorrect rendering in `bug.js` and the correct rendering in `bugSolution.js`.
