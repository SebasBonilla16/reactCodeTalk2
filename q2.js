/* Displaying Data inside Components: Create a new component called Avatar.
Given the following variable for a user, display the content inside the Avatar component when rendered.
Explain your code. Describe how curly braces are useful to display data. */

import React from 'react';

// Avatar component that displays user information
const Avatar = ({ user }) => {
  return (
    <div>
      {/* Display the user's name */}
      <h2>{user.name}</h2>
      
      {/* Display the user's image using the imageUrl prop */}
      <img src={user.imageUrl} alt={user.name} style={{ width: user.imageSize }} />
    </div>
  );
};

// User object with relevant data
const user = {
  name: 'Christopher Robin',
  imageUrl: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.npr.org%2Fassets%2Fimg%2F2011%2F07%2F13%2Fchristopherrobin-d13c9c20543fc6d051429ce97d7ac5cb47ac75f5.jpg&tbnid=nS1rvO2HUn5IaM&vet=12ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ..i&imgrefurl=https%3A%2F%2Fwww.npr.org%2F2011%2F07%2F13%2F137816699%2Fwill-christopher-robin-ever-grow-up&docid=0KPOynmmJAlCxM&w=765&h=573&q=christopher%20robin&ved=2ahUKEwjA7In08oP-AhUuk4QIHQBtAxMQMygDegUIARDqAQ',
  imageSize: 90,
};

export default function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      
      {/* Render the Avatar component and pass the user object as a prop */}
      <Avatar user={user} />
    </div>
  );
}


/* Curly braces are used in JSX to embed JS expressions. In the code above it is used to access and display
the data from the 'user' object. For example, '{user.name}' evaluates the 'name' property of the 'user' 
object and displays it as text content within the '<h2>' element. The curly braces lets us dynamically insert
values or execute JS code within JSX components */