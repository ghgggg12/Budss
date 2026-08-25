import React from 'react';
import { Flex } from '../../../shared/ui/types/flex/Flex.tsx'
import Cross from '../../../shared/assets/svg/cross.svg';
import Button from '@mui/material/Button';
import Like from '../../../shared/assets/svg/Like.svg';
import { useFormContext } from '../Form/codes/open/Context.tsx';
import './ThankYou.css';

export const ThankYou: React.FC = () => {
    const { display, setDisplay } = useFormContext();

    if(!display){
        return null;
    }
  return (
    <div className='ThankYou'>
        <Button className='ThankYou_Button_Cross' onClick={() => setDisplay(false)}>
            <img src={Cross} alt='close'/>
        </Button>
        <img src={Like} alt="Man" className='ThankYou_Image' />
        <Flex className='ThankYou_Texts' flexDirection='column'>
            <Flex className='Texts_Header' justifyContent='center'>
                Thank you!
            </Flex>
            <Flex className='Texts_About' justifyContent='center'>
                Thank you, we have received
                your application and will contact
                you soon!
            </Flex>
        </Flex>
        <div className='ThankYou_Button'>
            <Button className='Button_Super' variant="contained" onClick={() => setDisplay(false)}>
                Super!
            </Button>
        </div>
    </div>
  );
};