import React, {useState, useEffect} from 'react';
import { Flex } from '../../../shared/ui/types/flex/Flex.tsx'
import Cross from '../../../shared/assets/svg/cross.svg';
import Button from '@mui/material/Button';
import USA from '../../../shared/assets/svg/united-states-of-america.svg';
import {} from './codes/logic/enable-disable.ts';
import {} from './codes/logic/validate.ts';
import './Form.css';

export const Form: React.FC = () => {
    const [formData, setFormData] = useState({ 
        name: '',
        email: '', 
        phone: '',
        company: '',
        site: '',
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        const form = document.querySelector('.Form') as HTMLElement;
        const ThankYou = document.querySelector('.ThankYou') as HTMLElement;
        event.preventDefault();

        form.style.display = 'none';
        localStorage.setItem('formData', JSON.stringify(formData));
        console.log('Form:', formData);
        ThankYou.style.display = 'flex';
    };

    useEffect(() => {
        const saved = localStorage.getItem('formData');
        if (saved) {
            setFormData(JSON.parse(saved));
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const id = e.target.id.replace('_Input', '').toLowerCase();
        setFormData({
            ...formData,
            [id]: e.target.value
        });
    };

  return (
    <form className='Form' onSubmit={handleSubmit}>
        <Button className='Form_Button_Cross'>
            <img src={Cross} alt='close'/>
        </Button>
        <Flex className='Form_Inputs' flexDirection='column'>
            <Flex className='Inputs_Name inputs' flexDirection='column'>
                <div className='Name name star'>Name</div>
                <input id='name' className='Name_Input input star_input'
                    type="text" required placeholder="Enter name"  value={formData.name}
                    onChange={handleChange} />
                <div className='Name_Text star_text'>This field is required.</div>
            </Flex>
            <Flex className='Inputs_Email inputs' flexDirection='column'>
                <div className='Email name star'>Email</div>
                <input id='email' className='Email_Input input star_input'
                    type="email" required placeholder="Enter email"  value={formData.email}
                    onChange={handleChange} />
                <div className='Email_Text star_text'>This field is required.</div>
            </Flex>
            <Flex className='Inputs_Phone inputs' flexDirection='column'>
                <div className='Phone name star'>Phone number</div>
                <img src={ USA } alt='USA' className='Phone_Country' />
                <input id='phone' className='Phone_Input input star_input'
                    type="number" required placeholder="+ 1 900 000 00" value={formData.phone}
                    onChange={handleChange} />
                <div className='Phone_Text star_text'>This field is required.</div>
            </Flex>
            <Flex className='Inputs_Company inputs' flexDirection='column'>
                <div className='Company name'>Company</div>
                <input className='Company_Input input' id='company'
                    type="text" placeholder="Enter company" value={formData.company}
                    onChange={handleChange} />
            </Flex>
            <Flex className='Inputs_Store inputs' flexDirection='column'>
                <div className='Site name'>Website/Store URL</div>
                <input className='Name_Site input' id='site' 
                    type="text" placeholder="Enter Website/Store URL" value={formData.site}
                    onChange={handleChange} />
            </Flex>
        </Flex>
        <div className='Form_Star_Text'>
            Please fill in all required fields
        </div>
        <div className='Form_Text'>
            <a>By submitting this form you are agreeing to Budss's<br/></a>
            <a href='https://www.lunarclient.com/privacy' target='_blank' className="Text_Privacy">Privacy Policy</a>
            <a>&nbsp;and&nbsp;</a>
            <a href='https://www.lunarclient.com/terms' target='_blank' className="Text_Terms">Terms of Use</a>
        </div>
        <Button className="Form_Button" type='submit'>
            Contact sales
        </Button>
    </form>
  );
};