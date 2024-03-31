import React, { useState, useRef, useEffect } from 'react';
import './style.css'; // Importing our custom CSS

const FauxDropdown = ({ readOnly, options, defaultOption, className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultOption);
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [ref]);

  const handleSelect = (option) => {
    if (!readOnly) {
      setSelectedOption(option);
      setIsOpen(false);
    }
  };

  const toggleDropdown = () => {
    if (!readOnly) {
      setIsOpen((prevState) => !prevState);
    }
  };

  return (
    <div className={`faux-dropdown ${className}`} ref={ref}>
      <div className="dropdown-selected" onClick={toggleDropdown}>
        {selectedOption}
        <span className="dropdown-arrow">&#9660;</span>
      </div>
      {isOpen && (
        <ul className="dropdown-options">
          {options.map((option, index) => (
            <li key={index} onClick={() => handleSelect(option)} className={option === selectedOption ? 'selected' : ''}>
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default FauxDropdown;