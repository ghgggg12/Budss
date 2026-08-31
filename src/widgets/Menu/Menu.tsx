import React from 'react';
import MenuCross from '@shared/assets/svg/buttons/MenuCross.svg';
import Button from '@mui/material/Button';
import ContactButton from '@shared/ui/Button/Button.tsx';
import { useMenuContext } from '@/features/Context/MenuContext.tsx';
import './Menu.css';

export const Menu: React.FC = () => {
  const { isOpen, setIsOpen } = useMenuContext();

  if (!isOpen){
     return null;
  }

  return (
      <div className='BusinessSection_Menu'>
        <div className='Menu_Buttons'>
          <div className='Buttons_Close'>
            <Button className='Close_Cross' onClick={() => setIsOpen(false)}>
              <img className='Cross' src={ MenuCross } alt='X' />
            </Button>
          </div>
          <div className='Buttons_Contact' onClick={() => setIsOpen(false)}>
            <ContactButton />
          </div>
          <div className='Buttons_Other'>
            <a href='example.com' className='Other_Business ButtonsMenu'>
              For Business
            </a>
            <a href='example.com' className='Other_Customers ButtonsMenu'>
              For Customers
            </a>
            <a href='example.com' className='Other_Privacy ButtonsMenu'>
              Privacy Policy
            </a>
            <a href='example.com' className='Other_Seller ButtonsMenu'>
              Terms Of Use - Seller
            </a>
            <a href='example.com' className='Other_Customers ButtonsMenu'>
              Terms Of Use - Sellers & Customers
            </a>
          </div>
        </div>
      </div>
  );
};