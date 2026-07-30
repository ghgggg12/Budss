import React from 'react';
import { Flex } from '../../shared/ui/types/flex/Flex.tsx'
import { BudssLogo } from '../../shared/assets/svg/svg.tsx'
import Button from '@mui/material/Button';

export const Header: React.FC = () => {
  return (
    <header>
      <Flex className="buttons" justifyContent='flex-start'>
        <Button sx={{ boxShadow: 0 }} variant="contained" disableElevation className="Business">
          For Business
        </Button>
        <Button sx={{ boxShadow: 0 }} className="Customers">
          For Customers
        </Button>
      </Flex>

      <Flex className="Contact-btn2" justifyContent="flex-end">
        <Button variant="contained" className="Contact">
          Contact sales
        </Button>
      </Flex>

      <Flex flexDirection="row" className="budss">
        <Flex className="icon-budss" width="37px">
            <BudssLogo />
        </Flex>

        <Flex className="text-comp" width="100px">budss</Flex>
      </Flex>
    </header>
  );
};