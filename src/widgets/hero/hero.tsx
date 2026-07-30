import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex'
import { BackgroundGirl } from '../../shared/assets/svg/svg.tsx'
import Button from '@mui/material/Button';
import girl from '../../shared/assets/images/girl.png';

export const Hero: React.FC = () => {
  return (
    <section>
      <Flex className="FlexAbout" justifyContent="center" flexDirection="column" width="700px" height="75vh">
        <Flex className="Influencer">
          Everyone
          <br />is an Influencer
        </Flex>

        <Flex className="Budss-Info">
          Budss is a payments as a service and WOM engine dedicated
          <br />
          to acquisition and retention of customers to your business.
        </Flex>

        <Flex className="Contact-btn">
          <Button variant="contained" className="Contact">
            Contact sales
          </Button>
        </Flex>
      </Flex>

      <Flex className="Girl-img" justifyContent="flex-end" width="500px" height="520px">
        <img src={girl} alt="Girl" />
      </Flex>
      
      <Flex className="background-img" justifyContent="flex-end" width="800px">
          <BackgroundGirl />
      </Flex>
    </section>
  );
};