import { Flex } from '../../shared/ui/types/flex/Flex.tsx';
import { BudssLogo } from '../../shared/assets/svg/svg.tsx';
import Button from '@mui/material/Button';
import AppStore from '../../shared/assets/svg/appstore.svg';
import GooglePlau from '../../shared/assets/svg/googleplay.svg';
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
                    <div className='About_Business'>For Business</div>
                    <div className='About_Customers'>For Customers</div>
                </Flex>
                <Flex className='Row1_Buttons' width='1260px' alignItems='center' justifyContent='flex-end'>
                    <Button variant="contained" className="Buttons_Contact">
                      Contact sales
                    </Button>
                    <Button className="Buttons_AppStore">
                      <img src={AppStore} alt='AppStore'/>
                    </Button>
                    <Button className="Buttons_GooglePlay">
                      <img src={GooglePlau} alt='GooglePlay'/>
                    </Button>
                </Flex>
            </Flex>
            <Flex className='Footer_Line' width='92%' alignItems='center' justifyContent='center' />
            <Flex className='Footer_Row2'>
              <Flex className='Row2_Copyright'>
                © Copyright 2023, All Rights Reserved by Budss
              </Flex>
              <Flex className='Row2_Buttons' justifyContent='flex-end'>
                <Button className='Buttons_Privacy button'>
                  Privacy Policy
                </Button>
                <Button className='Buttons_Privacy button'>
                  Terms Of Use - Seller
                </Button>
                <Button className='Buttons_Privacy button'>
                  Terms of Use - Sellers & Customers
                </Button>
              </Flex>
            </Flex>
      </section>
    </footer>
  );
};