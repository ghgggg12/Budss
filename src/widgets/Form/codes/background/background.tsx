import React from 'react';
import './background.css';
import { useFormContext } from '../../../../features/Context/Context.tsx';

export const BackgroundForm: React.FC = () => {
    const { display } = useFormContext();
    
    if(!display){
        return null;
    }

  return (
    <div className='Background_Form' />
  );
};