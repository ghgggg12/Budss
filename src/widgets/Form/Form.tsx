import React, {useState} from 'react';
import { Flex } from '@shared/ui/types/flex/Flex.tsx'
import Cross from '@shared/assets/svg/cross.svg';
import Button from '@mui/material/Button';
import USA from '@shared/assets/svg/united-states-of-america.svg';
import { ThankYou } from '../Thank-you/ThankYou.tsx';
import type { SubmitHandler } from "react-hook-form";
import { useForm } from "react-hook-form";
import { useFormContext } from '@features/Context/Context.tsx';
import './Form.css';

interface FormI{
    name: string;
    email: string;
    phone: string;
    company: string;
    site: string;
};

export const Form: React.FC = () => {
    const [submitted, setSubmitted] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<FormI>()
    const onSubmit: SubmitHandler<FormI> = (data) => {console.log(data); setSubmitted(true);}

    const { display, setDisplay } = useFormContext();
    
    if(!display){
        return null;
    }

    if(submitted){
        return<ThankYou />;
    }
  return (
    <form className='Form' onSubmit={handleSubmit(onSubmit)}>
        <Button onClick={() => setDisplay(false)} className='Form_Button_Cross'>
            <img src={Cross} alt='close'/>
        </Button>
        <Flex className='Form_Inputs' flexDirection='column'>
            <Flex className='Inputs_Name inputs' flexDirection='column'>
                <label htmlFor='name' className='Name name star'>Name</label>
                <input id='name' className={errors.name ? "error" : "Name_Input input"}
                    type="text" placeholder="Enter name"
                    {...register("name", {required: true})}
                    />
                {errors.name && <div className='Phone_Text star_text'>This field is required.</div>}
            </Flex>
            <Flex className='Inputs_Email inputs' flexDirection='column'>
                <label htmlFor='email' className='Email name star'>Email</label>
                <input id='email' className={errors.email ? "error" : "Email_Input input"}
                    type="email" placeholder="Enter email"
                    {...register("email", {required: true})}
                    />
                {errors.email && <div className='Phone_Text star_text'>This field is required.</div>}
            </Flex>
            <Flex className='Inputs_Phone inputs' flexDirection='column'>
                <label htmlFor='phone' className='Phone name star'>Phone number</label>
                <div className='Input_Phone'>
                    <img src={ USA } alt='USA' className='Phone_Country' />
                    <input id='phone' className={errors.phone ? "Phone_Input error" : "Phone_Input input"}
                        type="tel" placeholder="+ 1 900 000 00"
                        {...register("phone", {required: true})}
                        />
                </div>
                {errors.phone && <div className='Phone_Text star_text'>This field is required.</div>}
            </Flex>
            <Flex className='Inputs_Company inputs' flexDirection='column'>
                <label htmlFor='company' className='Company name'>Company</label>
                <input className='Company_Input input' id='company'
                    type="text" placeholder="Enter company"
                    {...register("company")}
                    />
            </Flex>
            <Flex className='Inputs_Store inputs' flexDirection='column'>
                <label htmlFor='site' className='Site name'>Website/Store URL</label>
                <input className='Name_Site input' id='site' 
                    type="text" placeholder="Enter Website/Store URL"
                    {...register("site")}
                    />
            </Flex>
        </Flex>
        {(errors.name || errors.email || errors.phone) && (
            <div className="Form_Star_Text">Please fill in all required fields</div>
        )}
        <div className='Form_Text'>
            <span>By submitting this form you are agreeing to Budss's<br/></span>
            <a href='https://www.lunarclient.com/privacy' target='_blank' className="Text_Privacy">Privacy Policy</a>
            <span>&nbsp;and&nbsp;</span>
            <a href='https://www.lunarclient.com/terms' target='_blank' className="Text_Terms">Terms of Use</a>
        </div>
        <Button className="Form_Button" type='submit'>
            Contact sales
        </Button>
    </form>
  );
};