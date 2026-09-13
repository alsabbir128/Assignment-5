# Dev Stack Builder

A responsive React experience for exploring modern web technologies and assembling a personalized development stack.

## Built with

- Next.js 16 and React 19
- TypeScript
- Tailwind CSS
- React Toastify
- Local JSON technology data

## Features

- Responsive sticky navigation with mobile menu
- Technology cards with metadata, ratings, and loading state
- Interactive stack builder with duplicate protection, removal, and toast feedback

## React questions

### 1. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like elements inside JavaScript. React uses it to describe the UI in a readable way while still allowing JavaScript expressions.

### 2. What is the difference between props and state?
Props are values passed into a component by its parent. State is data owned by the component that can change and trigger a re-render.

### 3. What does the `useState` hook do, and where did you use it?
`useState` creates component state and a function to update it. This project uses it for the loaded technologies, selected stack, loading status, and mobile navigation state.

### 4. What does the `useEffect` hook do, and why did you need it?
`useEffect` runs side effects after rendering. It loads the local JSON data and turns off the loading state after the data is ready.

### 5. Why does every `.map()` item need a unique `key` prop?
A key helps React identify each item between renders, so it can update only the list elements that changed.

### 6. What is conditional rendering?
Conditional rendering displays different UI based on a condition. The stack panel shows `Your stack is empty.` when there are no selected technologies and shows stack items otherwise.

### 7. How does data move between parent and child components?
A parent passes data and callbacks to a child through props. The child calls a callback prop to send an interaction back to the parent, such as adding or removing a technology.

## Getting started

Run the project with your preferred Next.js development workflow, then open the local preview in a browser.
