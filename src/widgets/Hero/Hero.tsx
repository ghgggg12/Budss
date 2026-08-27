import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex.tsx'
import { BackgroundGirl } from '../../shared/assets/svg/svg.tsx'
import girl from '../../shared/assets/images/girl.png';
import ContactButton from '../../shared/ui/Button/Button.tsx';
import './Hero.css';

export const Hero: React.FC = () => {
  return (
    <section className='BusinessSection'>
      <div className="BusinessSection_Info">
        <Flex className="Info_Header">
          Everyone
          <br />is an Influencer
        </Flex>

        <Flex className="Info_About">
          Budss is a payments as a service and WOM engine dedicated
          to acquisition and retention of customers to your business.
        </Flex>

        <Flex className="Info_Button">
          <ContactButton />
        </Flex>
      </div>

      <Flex className='BusinessSection_Girl' alignItems='flex-end' justifyContent="flex-end" flexGrow={1}>
        <Flex className="Girl_Image" alignItems='flex-end' justifyContent="flex-end" width="500px" height="520px">
          <img src={girl} alt="Girl" />
        </Flex>
        
        <Flex className="Girl_Background" alignItems='flex-end' justifyContent="flex-end" width="800px">
            <BackgroundGirl />
        </Flex>
      </Flex>
    </section>
  );
};