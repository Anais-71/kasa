import React, { useState } from 'react';
import { FaChevronUp } from 'react-icons/fa';
import './dropdown.css'

function Dropdown({ title, items }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => setIsOpen(!isOpen);

  return (
    <div className='dropdown' style={{ position: 'relative' }}>
      <div className='dropdown__title'>
        <h2 className='dropdown__title--txt'>
          {title}
          <span className={`dropdown__title--click chevron ${isOpen ? '' : 'open'}`} onClick={toggleOpen}>
            <FaChevronUp />
          </span>
        </h2>
      </div>
      <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
      {items.map((item, index) => (
  <li key={index}>{item}</li>
))}
      </div>
    </div>
  );
}

export default Dropdown;