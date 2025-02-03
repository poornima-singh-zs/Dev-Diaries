import "./Content.css";
import girlImg from "../assets/girlImg.webp";
import Game from './Game'
import { memo } from "react";
const Content = () => {
  return (
    <div className="article">
      <div className="blog-header">
        <div className="author-div">
          <img
            src={girlImg}
            alt="Author"
            className="author-image"
            loading="lazy"
          />
          <span className="author-name">
            <strong>Poornima Singh </strong>
          </span>
          <span className="author-name" style={{ color: "green" }}>
            Follow{" "}
          </span>
        </div>
        <div className="blog-time">
          <span>10 min read</span>
          <span>.</span>
          <span>10 hours ago</span>
        </div>

        <div className="icons">
          <button className="icon-btn">❤️ </button>
          <button className="icon-btn">💬 </button>
          <button className="icon-btn">🔗 </button>
        </div>
      </div>

      <div className="article-content">
        <h1>Understanding the useState Hook in React</h1>
        <p>
          The `useState` hook is one of the most commonly used hooks in React.
          It allows you to add state to functional components. Before hooks,
          state could only be used in class components, but with the
          introduction of hooks, functional components can now manage state as
          well.
        </p>
        <p>In this article, we’ll explore:</p>
        <ul>
          <li>What is useState?</li>
          <li>How to use useState.</li>
          <li>Practical examples of useState.</li>
          <li>Common pitfalls and best practices.</li>
        </ul>
        <hr />
        <h2>1. What is useState?</h2>
        <p>
          The useState hook is a built-in React hook that allows you to add
          state to functional components. It takes an initial value as an
          argument and returns an array with two elements:
        </p>
        <ul>
          <li>The current state value.</li>
          <li>A function to update the state.</li>
        </ul>
        <pre>
          <code>{`const [state, setState] = useState(initialValue);`}</code>
        </pre>
        <ul>
          <li>
            <strong>state:</strong> The current value of the state.
          </li>
          <li>
            <strong>setState:</strong> A function used to update the state.
          </li>
          <li>
            <strong>initialValue:</strong> The initial value of the state..
          </li>
        </ul>
        <hr />
        <h2>2. How to Use useState</h2>
        <p>
          To use useState, you need to import it from React and call it inside
          your functional component. Let’s break it down with an example.
        </p>
        <pre>
          <code>
            {`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default Counter;`}
          </code>
        </pre>
        <h3>Explanation : </h3>
        <p>
          <strong>Import useState:</strong> We import useState from React.
        </p>
        <p>
          <strong>Initialize State:</strong>We declare a state variable count
          and a function setCount to update it. The initial value of count is 0.
        </p>
        <p>
          <strong>Update State: </strong>When the button is clicked, setCount is
          called with the new value (count + 1), which updates the state and
          triggers a re-render.
        </p>
        <hr />
        <h2>3. Practical Examples of useState</h2>
        <h3>Example 1: Toggle Button</h3>
        <pre>
          <code>
            {`import React, { useState } from 'react';

function ToggleButton() {
  const [isOn, setIsOn] = useState(false);

  return (
    <div>
      <button onClick={() => setIsOn(!isOn)}>
        {isOn ? 'ON' : 'OFF'}
      </button>
    </div>
  );
}

export default ToggleButton;`}
          </code>
        </pre>
        <h3>Explanation :</h3>
        <ul>
          <li>
            The isOn state toggles between true and false when the button is
            clicked.
          </li>
          <li>The button text changes dynamically based on the state.</li>
        </ul>
        <hr />

        <h2>4. Common Pitfalls and Best Practices</h2>
        <h3>1. Direct State Mutation:</h3>
        <p>
          Never mutate the state directly. Always use the state updater
          function.
        </p>
        <pre>
          <code>
            {`// Wrong
count = count + 1;

// Correct
setCount(count + 1);`}
          </code>
        </pre>

        <h3>2. Asynchronous State Updates:</h3>
        <p>
          State updates are asynchronous. If you need to update state based on
          the previous state, use the functional form of setState.
        </p>
        <pre>
          <code>{`setCount((prevCount) => prevCount + 1);`}</code>
        </pre>
        <h3>3. Overusing State:</h3>
        <p>
          Avoid using state for values that can be derived from props or other
          state variables.
        </p>

        <hr />

        <h2>Best Practices:</h2>
        <ul>
          <li>
            <strong>Keep State Local:</strong> Use state only for data that
            needs to trigger re-renders. For other data, consider using refs or
            context.
          </li>
          <li>
            <strong>Use Descriptive Names:</strong> Name your state variables
            and updater functions descriptively (e.g., count and setCount).
          </li>
          <li>
            <strong>Initialize State Properly:</strong> Always provide a
            meaningful initial value for your state.
          </li>
          <li>
            <strong>Use Multiple useState Hooks:</strong> If your component
            manages multiple unrelated pieces of state, use separate useState
            hooks for each.
          </li>
        </ul>
        <hr />
        <h2>Conclusion</h2>
        <p>
          The useState hook is a powerful tool that simplifies state management
          in functional components. By understanding its syntax, usage, and best
          practices, you can build dynamic and interactive React applications
          with ease. Whether you are building a simple counter, a toggle button,
          or a complex form, useState is your go-to hook for managing state in
          functional components. Happy coding! 🚀
        </p>
        <hr/>
        <div className="game">
           <h2>How about a Rock, Paper, Scissors game? ✊📄✂️</h2>
           <p>This game is fun, interactive, and perfect for demonstrating useState in React. It tracks:</p>
           <ul>
            <li><strong>User's choice </strong>(Rock, Paper, or Scissors)</li>
            <li><strong>Computer's random choice</strong></li>
            <li><strong>Game result </strong>(Win/Lose/Draw)</li>
           </ul>
           <Game />
         
        </div>
      </div>
     
     
    </div>
  );
};
export default memo (Content);
