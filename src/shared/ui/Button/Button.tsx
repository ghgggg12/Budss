import { useFormContext } from '@features/Context/FormContext';
import Button from '@mui/material/Button';
import './Button.css';

export const ContactButton: React.FC = () => {
  const { setDisplay } = useFormContext();

  return (
    <Button onClick={() => setDisplay(true)} variant="contained" className="Contact">
      Contact sales
    </Button>
  );
};

export default ContactButton;