import { Flex } from '@shared/ui/types/flex/Flex.tsx';
import { BudssLogo } from '@shared/assets/svg/svg.tsx';
import Button from '@mui/material/Button';
import ContactButton from '@shared/ui/Button/Button.tsx';
import AppStore from '@shared/assets/svg/appstore.svg';
import GooglePlay from '@shared/assets/svg/googleplay.svg';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer>
      <section className='BusinessSection_Footer'>
            <Flex className='Footer_Row1'>
                <Flex className='Row1_Logo' width='330px' alignItems='center' justifyContent='flex-start'>
                    <Flex className="Logo_Image" width="37px">
                        <BudssLogo />
                    </Flex>
                    <Flex className="Logo_Text">budss</Flex>
                </Flex>
                <Flex className='Row1_About' alignItems='center' justifyContent='center'>
                    <a className='About_Business'>For Business</a>
                    <a className='About_Customers'>For Customers</a>
                </Flex>
                <Flex className='Row1_Buttons' width='1260px' alignItems='center' justifyContent='flex-end'>
                    <ContactButton />
                    <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_AppStore">
                      <img src={AppStore} alt='AppStore'/>
                    </Button>
                    <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_GooglePlay">
                      <img src={GooglePlay} alt='GooglePlay'/>
                    </Button>
                </Flex>
            </Flex>
            <Flex className='Footer_Line' width='92%' alignItems='center' justifyContent='center' />
            <Flex className='Footer_Row2'>
              <Flex className='Row2_Copyright'>
                © Copyright 2023, All Rights Reserved by Budss
              </Flex>
              <Flex className='Row2_Buttons' justifyContent='flex-end'>
                <Button href='https://www.lunarclient.com/privacy' target='_blank' className='Buttons_Privacy button'>
                  Privacy Policy
                </Button>
                <Button href='https://www.lunarclient.com/terms' target='_blank' className='Buttons_Terms_Seller button'>
                  Terms Of Use - Seller
                </Button>
                <Button href='https://www.lunarclient.com/terms' target='_blank' className='Buttons_Terms_Customers button'>
                  Terms of Use - Sellers & Customers
                </Button>
              </Flex>
            </Flex>
      </section>
    </footer>
  );
};