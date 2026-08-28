import { BudssLogo } from '@shared/assets/svg/svg.tsx';
import Button from '@mui/material/Button';
import ContactButton from '@shared/ui/Button/Button.tsx';
import AppStore from '@shared/assets/svg/appstore.svg';
import GooglePlay from '@shared/assets/svg/googleplay.svg';
import './Footer.css';

export const Footer: React.FC = () => {
  return (
    <footer className='BusinessSection_Footer'>
        <div className='Footer_Row1'>
            <div className='Row1_Logo'>
                <div className="Logo_Image">
                    <BudssLogo />
                </div>
                <div className="Logo_Text">budss</div>
            </div>
            <div className='Row1_About'>
                <a className='About_Business'>For Business</a>
                <a className='About_Customers'>For Customers</a>
            </div>
            <div className='Row1_Buttons'>
                <ContactButton />
                <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_AppStore">
                  <img src={AppStore} alt='AppStore'/>
                </Button>
                <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_GooglePlay">
                  <img src={GooglePlay} alt='GooglePlay'/>
                </Button>
            </div>
        </div>
        <div className='Footer_Column1'>
            <div className='Column1_Logo'>
                <div className="Logo_Image">
                    <BudssLogo />
                </div>
                <div className="Logo_Text">budss</div>
            </div>
            <div className='Column1_Buttons'>
              <a href='example.com' className='Buttons_Business Buttons'>
                For Business
              </a>
              <a href='example.com' className='Buttons_Customers Buttons'>
                For Customers
              </a>
              <a href='example.com' className='Buttons_Privacy Buttons'>
                Privacy Policy
              </a>
              <a href='example.com' className='Buttons_Seller Buttons'>
                Terms Of Use - Seller
              </a>
              <a href='example.com' className='Buttons_Customers Buttons'>
                Terms Of Use - Sellers & Customers
              </a>
              <div className='Buttons_Contact'>
                <ContactButton />
              </div>
              <div className='Buttons_AppStore'>
                <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_AppStore">
                  <img src={AppStore} alt='AppStore'/>
                </Button>
              </div>
              <div className='Buttons_GooglePlay'>
                <Button href='https://apps.apple.com/us/app/budss/id1595412742' target='_blank' className="Buttons_GooglePlay">
                  <img src={GooglePlay} alt='GooglePlay'/>
                </Button>
              </div>
            </div>
        </div>
        <div className='Footer_Line' />
        <div className='Footer_Row2'>
          <div className='Row2_Copyright'>
            © Copyright 2023, All Rights Reserved by Budss
          </div>
          <div className='Row2_Buttons'>
            <Button href='https://www.lunarclient.com/privacy' target='_blank' className='Buttons_Privacy button'>
              Privacy Policy
            </Button>
            <Button href='https://www.lunarclient.com/terms' target='_blank' className='Buttons_Terms_Seller button'>
              Terms Of Use - Seller
            </Button>
            <Button href='https://www.lunarclient.com/terms' target='_blank' className='Buttons_Terms_Customers button'>
              Terms of Use - Sellers & Customers
            </Button>
          </div>
        </div>
        <div className='Footer_Column2'>
          <div className='Column2_Copyright'>
            © Copyright 2023, All Rights Reserved by Budss
          </div>
        </div>
    </footer>
  );
};