# AI usage log

## Week 1

- **Tool(s):** ChatGPT / Gemini
- **What I asked for:** Help understanding and implementing the CampusEats Week 1 React components and JSX requirements.
- **What I kept, changed or rejected, and why:** I kept the basic component structure and JSX examples, but I customized the vendor and menu item information to match my own restaurant ("The View") and mahallah context.
- **One thing the AI got wrong and how I fixed it:** The AI initially generated static menu data with incorrect prop structures. I checked the code against the lab requirements and refactored the props to match the specified component signatures.

---

## Week 2

- **Tool(s):** ChatGPT / Gemini
- **What I asked for:** Guidance on state lifting, handling shopping cart interactions, and component composition in React.
- **What I kept, changed or rejected, and why:** I kept the recommended state structure for tracking cart line items (`{ item, qty }`) and view-switching logic, but adjusted styling to fit our project layout.
- **One thing the AI got wrong and how I fixed it:** The AI suggested using a third-party router (React Router) for view switching, which was beyond the scope of this phase. I rejected it and implemented a lightweight string state (`'menu' | 'cart' | 'done'`) in `App.jsx` instead.

---

## Week 3 (Including Personal Feature)

- **Tool(s):** Gemini
- **What I asked for:** Assistance with asynchronous data fetching (`useEffect`, `fetch`, `AbortController`), form validation logic, and implementing my assigned personal feature based on my matric number (`2413411`, ending in `1`: **Popular Items Filter & Badges**).
- **What I kept, changed or rejected, and why:** 
  - I kept the `fetch('/api/vendors.json')` setup with `AbortController` cleanup and retry mechanisms.
  - I kept the `showPopularOnly` filter state and `Popular ⭐` badge logic in `MenuList.jsx` to satisfy my personal feature requirement.
  - I initially received a countdown timer component (`DailySpecial.jsx`) meant for matric ending in 5 due to an initial mix-up; I rejected that and replaced it with the correct **Popular Items Filter and Badges** feature for my matric number ending in 1.
- **One thing the AI got wrong and how I fixed it:** The AI initialized `selectedVendorId` using `vendors[0].id` synchronously before fetching completed, which caused a runtime error (`Cannot read properties of undefined`). I fixed this by setting the initial state to `null` and updating `selectedVendorId` safely inside the `.then()` promise callback after data arrived.
