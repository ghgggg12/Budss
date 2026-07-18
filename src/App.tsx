import React from 'react';
import './styles/styles.css';
import Button from '@mui/material/Button';
import girl from './assets/images/image.png';

function App() {
  return (
    <>
      <header>

        <div className='buttons'>
          <Button variant="contained" className='Business'>For Business</Button> 
          <Button variant="contained" className='Customers'>For Customers</Button>
        </div>

        <div className='Contact-btn2'><Button variant="contained" className='Contact'>Contact sales</Button></div>

        <div className='icon-budss'>
          <svg viewBox="0 0 33 37" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path opacity="0.7" d="M16.0497 18.4075L12.8045 18.4513C8.94266 18.5035 5.7697 15.4151 5.71753 11.5532C5.66537 7.69136 8.75374 4.5184 12.6156 4.46623L28.658 4.24953" stroke="#FFAA4C" stroke-width="8.44412" stroke-linecap="round" />
            <path opacity="0.7" d="M27.2402 32.5569L11.1893 32.5137C7.33101 32.5033 4.2117 29.3671 4.22209 25.5089C4.23245 21.6582 7.35674 18.542 11.2074 18.5417L16.1756 18.5412" stroke="#2FDBBC" stroke-width="8.44412" stroke-linecap="round" />
            <path opacity="0.7" d="M27.3431 32.4229L17.0952 19.9618C16.1709 18.838 16.2303 17.2012 17.2335 16.1473L28.585 4.22217" stroke="#A64CED" stroke-width="8.44412" stroke-linecap="round" />
          </svg>
        </div>

        <h1 className='text-comp'>budss</h1>

        <div className='main-text'>Everyone is an Influencer</div>
        <div className='next-text'>Budss is a payments as a service and WOM engine dedicated<br/>to acquisition and retention of customers to your business.</div>

        <div className='Contact-btn'><Button variant="contained" className='Contact'>Contact sales</Button></div>
        
        <div className='Girl-img'>
          <img src={girl} alt="Girl Image" />
        </div>

        <div className='background-img'>
          <svg viewBox="0 0 586 498" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M795.537 419.052L250.595 417.586C158.616 417.338 84.253 342.574 84.5006 250.595C84.7478 158.756 159.294 84.4504 251.133 84.5L453.547 84.6095" stroke="#FFAA4C" stroke-width="169" stroke-linecap="round" />
          </svg>
        </div>

      </header>

      <div className='Background'></div>
    </>
  );
};

export default App;
