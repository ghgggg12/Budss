import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex.tsx';
import { BudssLogo } from '../../shared/assets/svg/svg.tsx';
import Button from '@mui/material/Button';
import './Header.css';

export const Header: React.FC = () => {
  return (
    <header>
      <section className='BusinessSection_Header'>
        <div className="Background" />
        <Flex as="nav" className="BusinessSection_Buttons" width="350px" justifyContent='flex-start'>
          <Button sx={{ boxShadow: 0 }} variant="contained" disableElevation className="Business">
            For Business
          </Button>
          <Button sx={{ boxShadow: 0 }} className="Customers">
            For Customers
          </Button>
        </Flex>

        <Flex className="BusinessSection_Contact" justifyContent="flex-end">
          <Button variant="contained" className="Contact">
            Contact sales
          </Button>
        </Flex>

        <Flex flexDirection="row" width="135px" className="BusinessSection_HeaderBudss">
          <Flex className="icon-budss" width="37px">
              <BudssLogo />
          </Flex>

          <Flex className="BusinessSection_Text" width="100px">budss</Flex>
        </Flex>
      </section>
    </header>
  );
};