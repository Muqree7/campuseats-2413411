# Week 1 reflection
1. What is the difference between building a UI imperatively (plain DOM code) and
declaratively (React)?

Imperative UI means we tell the browser step by step what to do using DOM code. Declarative UI in React lets us describe what we want the page to look like, and React handles the updates for us.

2. Why must a component name start with a capital letter?

Component names start with a capital letter so React knows it is a custom component, not a normal HTML element. For example, <Header /> is a component, while <div> is an HTML element.

3. What does a fragment <>...</> do, and why not just use a <div>?

<>...</> lets us group several elements together without adding an extra <div>. This keeps the HTML structure cleaner when we don't actually need another element.

4. Name one benefit of splitting the UI into small components.

Splitting the UI into smaller components makes the code easier to read and manage. It also lets us reuse the same component in different parts of the website.