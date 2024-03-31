import React from 'react';
import FauxDropdown from "./FauxDropdown";

const dropdownOptions = [
  "Option 1",
  "Option 2",
  "Option 3"
]

export function App(props) {
  return (
    <div className='App'>
      <FauxDropdown options={dropdownOptions} defaultOption={dropdownOptions[1]} />
      <FauxDropdown options={dropdownOptions} defaultOption={dropdownOptions[1]} className="long-dropdown" />
    </div>
  );
}

// Log to console
console.log('Hello console')