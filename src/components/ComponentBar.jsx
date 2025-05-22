import React from 'react';
import '../styles/ComponentBar.css';

const ComponentBar = ({ children, actions }) => {
  return (
    <>
      <div className="component-bar">
        <div className="component-actions">
          {actions}
        </div>
      </div>
      <div className="content-container">
        {children}
      </div>
    </>
  );
};

export default ComponentBar;