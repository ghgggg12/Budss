import React from 'react';
import Button from '@mui/material/Button';
import girl from '../../../shared/assets/images/girl.png';

export const Hero: React.FC = () => {
  return (
    <section>
      <div className="main-text">
        Everyone
        <br/>is an Influencer
      </div>

      <div className="next-text">
        Budss is a payments as a service and WOM engine dedicated
        <br/>to acquisition and retention of customers to your business.
      </div>

      <div className="Contact-btn">
        <Button variant="contained" className="Contact">
          Contact sales
        </Button>
      </div>

      <div className="Girl-img">
        <img src={girl} alt="Girl" />
      </div>
    </section>
  );
};