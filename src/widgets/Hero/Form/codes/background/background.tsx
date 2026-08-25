import React from 'react';
import './background.css';
import { useFormContext } from '../../codes/open/Context.tsx';

export const BackgroundForm: React.FC = () => {
    const { display } = useFormContext();
    
    if(!display){
        return null;
    }

  return (
    <div className='Background_Form' />
  );
};