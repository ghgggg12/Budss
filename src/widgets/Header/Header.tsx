import React from 'react';
import { Flex } from '@shared/ui/types/flex/Flex.tsx';
import { BudssLogo } from '@shared/assets/svg/svg.tsx';
import Burger from '@shared/assets/svg/buttons/Burger.svg';
import Button from '@mui/material/Button';
import ContactButton from '@shared/ui/Button/Button.tsx';
import { useMenuContext } from '@/features/Context/MenuContext.tsx';
import './Header.css';

export const Header: React.FC = () => {
  const { isOpen, setIsOpen } = useMenuContext();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className='BusinessSection_Header'>
      <div className="Header_Background" />
      <Flex as="nav" className="Header_Buttons" width="350px" justifyContent='flex-start'>
        <Button sx={{ boxShadow: 0 }} variant="contained" disableElevation className="Header_Business">
          For Business
        </Button>
        <Button sx={{ boxShadow: 0 }} className="Header_Customers">
          For Customers
        </Button>
      </Flex>

      <div className="Header_Button">
        <ContactButton />
      </div>
      <Button className='Header_Burger' onClick={toggleMenu}>
        <img src={Burger} alt='☰'/>
      </Button>

      <Flex flexDirection="row" width="135px" className="Header_HeaderBudss">
        <Flex className="icon-budss" width="37px">
            <BudssLogo />
        </Flex>

        <Flex className="Header_Text" width="100px">budss</Flex>
      </Flex>
    </header>
  );
};