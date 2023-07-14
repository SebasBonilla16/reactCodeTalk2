// Nesting Components and working with props: Refactor using the code below.  
// Create the functionality for a reusable button component that will accept ‘title’ as props that will display as the text of the button when rendered inside of App.js.
// Render the button twice with the titles:  “Add to cart”  and  “Find out more”  Explain your code. Describe how props work.  What is the difference between props and state?

import React from 'react';

// Button component that accepts the 'title' prop
function MyButton(props) {
  return (
    <button>
      {props.title}
    </button>
  );
}

// Parent component MyApp
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      
      {/* Render the MyButton component with the 'title' prop set to "Add to cart" */}
      <MyButton title="Add to cart" />
      
      {/* Render the MyButton component with the 'title' prop set to "Find out more" */}
      <MyButton title="Find out more" />
    </div>
  );
}


/* Difference between props and state
    Props:
        - Way to pass data from a parent component to child
        - Read-only
        - Can be any JS value(strings, numbers, etc)
        - Useful for creating reusable components that can be customized
    State:
        - Represents internal data of a component that can change over time
        - Managed within the component itself
        - Only be used in class components or functional components that use React hooks
        - Can be modified using functions provided by React, such as 'setState' or 'useState' */