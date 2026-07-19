import React from 'react';
import Button from '@mui/material/Button';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="buttons">
        <Button variant="contained" className="Business">
          For Business
        </Button>
        <Button variant="contained" className="Customers">
          For Customers
        </Button>
      </div>

      <div className="Contact-btn2">
        <Button variant="contained" className="Contact">
          Contact sales
        </Button>
      </div>

      <div className="icon-budss">
        <svg viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path opacity="0.7" d="M16.0497 18.4075L12.8045 18.4513C8.94266 18.5035 5.7697 15.4151 5.71753 11.5532C5.66537 7.69136 8.75374 4.5184 12.6156 4.46623L28.658 4.24953" stroke="#FFAA4C" strokeWidth="8.44412" strokeLinecap="round" />
          <path opacity="0.7" d="M27.2402 32.5569L11.1893 32.5137C7.33101 32.5033 4.2117 29.3671 4.22209 25.5089C4.23245 21.6582 7.35674 18.542 11.2074 18.5417L16.1756 18.5412" stroke="#2FDBBC" strokeWidth="8.44412" strokeLinecap="round" />
          <path opacity="0.7" d="M27.3431 32.4229L17.0952 19.9618C16.1709 18.838 16.2303 17.2012 17.2335 16.1473L28.585 4.22217" stroke="#A64CED" strokeWidth="8.44412" strokeLinecap="round" />
        </svg>
      </div>

      <h1 className="text-comp">budss</h1>
    </header>
  );
};