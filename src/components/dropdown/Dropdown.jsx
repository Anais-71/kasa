import React, { useState } from 'react';

//CSS
import './dropdown.css'

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='dropdown'>
      <div className='dropdown__title'>
      <h2 className='dropdown__title--txt'>
        {title}
        <span className="dropdown__title--click" onClick={toggleOpen}>
          {isOpen ? <i className="fas fa-chevron-down"></i> : <i className="fas fa-chevron-up"></i>}
        </span>
      </h2>
      </div>
      {isOpen && (
        <ul className='dropdown__content'>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Dropdown;