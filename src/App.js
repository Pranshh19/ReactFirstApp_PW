import logo from './logo.svg';
import './App.css';
import PersonCard from './PersonCard';
import Button from './Button';
import React, { useState } from 'react';
import Header from './Header';
import List from './List';


function App(props) {
  // Define a state to hold the text to be displayed
  const [displayText, setDisplayText] = useState('');
  // Define a function to handle the button click
  const handleClick = () => {
    setDisplayText('Text displayed on button click!');
  };

  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4'];

  return (
    <div className="App">
      <Header title="This is a title"></Header>
      <PersonCard name="Rahul" age="56"></PersonCard>
      <Button text="Click me" onClick={handleClick}></Button>
      {displayText && <p>{displayText}</p>}

      <List items={items} />
    </div>
  );
}

export default App;
