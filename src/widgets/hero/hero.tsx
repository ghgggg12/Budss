import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex'
import { BackgroundGirl } from '../../shared/assets/svg/svg.tsx'
import Button from '@mui/material/Button';
import girl from '../../shared/assets/images/girl.png';
import background from '../../shared/assets/svg/backgroundText.svg';
import BudssLogo from '../../shared/assets/svg/logo.svg';
import Star from '../../shared/assets/svg/star.svg'
import Wave from '../../shared/assets/svg/wave.svg'
import Arrow from '../../shared/assets/svg/arrow.svg'
import Chain from '../../shared/assets/svg/chain.svg'
import './hero.css';

export const Hero: React.FC = () => {
  return (
    <section>
      <section className='BusinessSection'>
        <Flex className="BusinessSection_About" justifyContent="center" flexDirection="column" width="700px" height="75vh">
          <Flex className="BusinessSection_Header">
            Everyone
            <br />is an Influencer
          </Flex>

          <Flex className="BusinessSection_Info">
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

        <div className='BusinessSection_Girl'>
          <Flex className="BusinessSection_Image" justifyContent="flex-end" width="500px" height="520px">
            <img src={girl} alt="Girl" />
          </Flex>
          
          <Flex className="BusinessSection_Background" justifyContent="flex-end" width="800px">
              <BackgroundGirl />
          </Flex>
        </div>
      </section>
      <section className='AboutSection'>
        <Flex className='AboutSection_About' justifyContent="center" flexDirection="column" width="550px" height="auto">
          <Flex className='AboutSection_Header' alignItems='flex-start'>
              About Budss
          </Flex>
          <div className='AboutSection_Text'>
              <div className='AboutSection_Info'>
                Payment as a service, powered seamlessly by our network of shoppers
              </div>
              <Flex alignItems='flex-end'>
                <img src={background} className='AboutSection_Background' />
              </Flex>
          </div>
        </Flex>
        <div className='AboutSection_Logo'>
          <img src={BudssLogo} alt="Budss logo" />
        </div>
        <Flex className='AboutSection_Icons' alignItems='flex-start' flexDirection='row' flexWrap='wrap' justifyContent='flex-start' width="500px" height="300px">
          <img src={Star} className='AboutSection_Star' />
          <img src={Arrow} className='AboutSection_Arrow' />
          <img src={Wave} className='AboutSection_Wave' />
          <img src={Chain} className='AboutSection_Chain' />
        </Flex>
        <Flex className="AboutSection_MainText" alignItems="flex-start" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" width="700px" height="460px">
          <div>Contactless</div>
          <div>Increased<br/>Buying Power</div>
          <div className='Analytics'>Analytics<br/>&amp; Insights</div>
          <div className='Fraud'>Fraud<br/>Protection</div>
        </Flex>
        <Flex className="AboutSection_OtherText" alignItems="flex-start" flexDirection="row" flexWrap="wrap" justifyContent="flex-start" width="800px" height="460px">
          <div className='NFC'>
            Budss uses near field<br/>
            communication (NFC) for<br/>
            making contactless payments.
          </div>
          <div className='Spend'>
            Returning customers spend<br/>
            up to 3X more.
          </div>
          <div className='Patterns'>
            Gain a holistic view into your<br/>
            customers’ buying behavior<br/>
            & purchasing patterns. 
          </div>
          <div className='Secure'>
            Budss handles all payments<br/>
            with a fraud prevention<br/>
            algorithm to flag high risk<br/>
            purchases & a user set PIN code<br/>
            to keep payment info secure.
          </div>
        </Flex>
      </section>
    </section>
  );
};