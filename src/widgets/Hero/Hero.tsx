import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex.tsx'
import { BackgroundGirl } from '../../shared/assets/svg/svg.tsx'
import Button from '@mui/material/Button';
import girl from '../../shared/assets/images/girl.png';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className='BusinessSection'>
      <Flex className="BusinessSection_Info" justifyContent="center" flexDirection="column" width="700px" height="75vh">
        <Flex className="BusinessSection_Header">
          Everyone
          <br />is an Influencer
        </Flex>

        <Flex className="BusinessSection_About">
          Budss is a payments as a service and WOM engine dedicated
          <br />
          to acquisition and retention of customers to your business.
        </Flex>

        <Flex className="ContactButton">
          <Button variant="contained" className="Contact">
            Contact sales
          </Button>
        </Flex>
      </Flex>

      <Flex className='BusinessSection_Girl' alignItems='flex-end' justifyContent="flex-end" flexGrow={1}>
        <Flex className="BusinessSection_Image" alignItems='flex-end' justifyContent="flex-end" width="500px" height="520px">
          <img src={girl} alt="Girl" />
        </Flex>
        
        <Flex className="BusinessSection_Background" alignItems='flex-end' justifyContent="flex-end" width="800px">
            <BackgroundGirl />
        </Flex>
      </Flex>
    </section>
  );
};