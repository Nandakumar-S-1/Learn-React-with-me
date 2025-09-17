# React

React is a **JavaScript Library** for building **dynamic user interfaces** using a **component-based architecture**.  
It was developed by **Meta**.  
React updates and renders only the parts of the UI that change using a **Virtual DOM**, which improves performance compared to directly manipulating the real DOM.

---

## 🚀 Main Features of React

1. **Component-Based Architecture**  
   - UI is divided into small, reusable components.  
   - Each component has its own structure, logic, and styling.  

2. **Virtual DOM**  
   - React uses a virtual DOM to detect changes in the UI.  
   - Only the parts of the DOM that need updating are re-rendered, reducing performance issues.  

3. **JSX (JavaScript XML)**  
   - JSX allows developers to write **HTML-like syntax** inside JavaScript.  
   - Makes code more readable and easier to debug.  

4. **One-Way Data Binding**  
   - Data flows in a **single direction** (from parent → child).  
   - This makes data handling predictable and easier to debug.  

5. **State Management**  
   - State allows components to hold and update **local data dynamically**.  
   - Helps in building interactive and dynamic UIs.  

---

✨ Example JSX code:

```jsx
import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello React 🚀</h1>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}

export default App;

