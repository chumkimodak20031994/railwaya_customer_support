## Expanding the ESLint configuration

##CS — Ticket System

A simple React Customer Support Ticket System where users can view tickets, add them to In Progress, and mark them as Completed.
Responsive UI using TailwindCSS & DaisyUI

1. What is JSX, and why is it used?
   JSX (JavaScript XML) is a syntax extension for JavaScript used in React that allows developers to write HTML-like code inside JavaScript.
   JSX makes the UI code easier to read and write. React converts JSX into regular JavaScript using React.createElement().

---

2.What is the difference between State and Props?
Props:-
Passed from parent component to child component
Read-only (cannot be modified)
Used to send data between components

State:-
Managed inside a component
Can be updated
Used to manage dynamic data

---

3.What is the useState hook, and how does it work?
useState is a React Hook used to manage state inside functional components.
Syntax:
state stores the current value
setState updates the value
When the state changes, React re-renders the component.

---

4. How can you share state between components in React?

State can be shared by lifting the state up to the closest common parent component.
The parent component stores the state and passes it to child components using props.
Example:
Parent component holds the state
Child components receive the data via props.

---

5. How is event handling done in React?

Event handling in React is done using camelCase event names and functions.

Example:

<button onClick={handleClick}>Click</button>

Function:

const handleClick = () => {
console.log("Button clicked");
};

Common React events include:

onClick

onChange

onSubmit

onMouseOver
