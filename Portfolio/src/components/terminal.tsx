import React, { useState } from 'react';
import Burger from '../assets/Screenshot 2024-12-28 204500.png';
import '../styles/terminal.css'

const TerminalComponent: React.FC = () => {
  const [output, setOutput] = useState<React.ReactNode[]>([]);
  const [input, setInput] = useState<string>('');

  const handleCommand = (command:string) => {
    let response: React.ReactNode = '';
    command = command.toLowerCase();
    switch (command.toLowerCase()) {
        case 'burger':
          response = (
            <div>
                <p><strong>BurgerCraft</strong>: A fun and interactive project where users can customize their own burgers by choosing from a variety of ingredients. They can save their favorite creations by creating an account, making it easy to revisit and reorder their top picks!"</p>
                <img src={Burger} alt='Photo of BurgerCraft'/>
                <p><a href="https://github.com/Jerry13975/BurgerCraft" target='_blank' rel='noopener noreferrer'>Click here to learn more about BurgerCraft!</a></p>
            </div>
          )
          break;
        case 'help':
          response = (
            <div>
              <p><strong>Available commands:</strong></p>
              <ul>
                <li><strong>burger</strong>: A fun and interactive project where users can create burgers by selecting various ingredients. It allows users to explore a variety of burger toppings and customize their orders.</li>
              </ul>
            </div>
          );
          break;
        default:
          response = null;
      }

    if (response !== null) {
        setOutput([response]);
    } else {
        setOutput((prev) => [
          ...prev,
          `Command "${command}" not recognized. Type "help" for a list of available commands.`,
        ]);
      }
  };
  
  const handleSumbit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      handleCommand(input.trim());
      setInput('');
    }
  };

  return (
    <div className='terminal-container'>
      <div className='terminal'>
        <p className='welcome-message'>Welcome to the project search terminal! Type 'help' to see the list of available commands.</p>
        {output.map((line, index) => (
          <div key={index} className='output-line'>
            {line}
          </div>
        ))}
      </div>
      <form onSubmit={handleSumbit} className='input-form'>
        <span>user@my-terminal:~$ </span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className='terminal-input'
          autoFocus
        />
      </form>
    </div>
  )
};

export default TerminalComponent;