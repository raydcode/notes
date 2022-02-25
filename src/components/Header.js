import React from 'react';
import { MdDarkMode, MdOutlineDarkMode } from 'react-icons/md';
const Header = ({ handleToggleDarkMode, is_mode }) => {
  return (
    <div className="header">
      <h1>
        <span>Ray</span> <span>D</span> Notes
      </h1>

      <button
        onClick={() =>
          handleToggleDarkMode((previousDarkMode) => !previousDarkMode)
        }
        style={{
          outline: 'none',
          background: 'none',
          border: 'none',
          color: is_mode ? '#ffff' : '#000000',
        }}
      >
        {is_mode ? <MdOutlineDarkMode /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default Header;
