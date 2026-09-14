# Dev Stack

A polished interactive technology stack builder for developers. Browse popular tools, filter them by category, and create a personalized stack for your next project.

## Live Preview

Run the project locally and open the preview in your browser. You can also publish it from the top-right corner of the v0 workspace to generate a public Vercel URL.

## Technology Used

- React 19 with Vite
- TypeScript
- Tailwind CSS
- Lucide React icons
- React Toastify notifications
- JSON-based technology data

## Features

- **Explore technologies:** Browse frontend, backend, database, and tooling options.
- **Build a personal stack:** Add technologies, remove individual items, or clear the full stack.
- **Responsive interface:** Use the app comfortably on mobile, tablet, and desktop.
- **Loading experience:** See a branded loading screen while the application initializes.

## Running the project

```bash
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173).

## Project Structure

```text
vite-app/                    React + Vite application
vite-app/src/App.tsx         Main application component
vite-app/src/main.tsx        Vite entry point
vite-app/src/data/           Technology data
```

## React Questions

### What is JSX, and why is it used in React?

JSX lets us write HTML-like UI inside JavaScript. It makes React components easier to read and build.

### What is the difference between props and state?

Props are data passed from a parent to a child. State is data managed inside a component that can change over time.

### What does the `useState` hook do, and where did you use it?

`useState` stores changing values in a component. This project uses it for the technology list, selected stack, loading screen, filters, and mobile menu.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after rendering. It helps finish the loading state after the technology data is ready in the browser.

### Why does every item in a `.map()` list need a unique `key` prop?

A unique key helps React recognize each list item and update the correct item efficiently when the list changes.

### What is conditional rendering? Show one place you used it.

Conditional rendering displays different content based on a condition. The stack panel shows an empty message when no technology has been selected:

```tsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackItems />
)}
```

### How do you pass data from a parent component to a child component, and how does a child send something back?

A parent passes data through props, such as sending the selected stack to a stack panel. A child sends information back by calling a callback prop, such as `onAdd` or `onRemove`.

## License

This project is available for learning and personal use.

---

Built with React and Vite for developers choosing their next technology stack.
