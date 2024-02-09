import './index.scss';
import emailjs from '@emailjs/browser';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';

const CssTextField = styled(TextField)({
    '& label.Mui-focused': {
        color: '#5052a6',
        fontSize: '20px'
    },
    '& label': {
        color: 'white',
        fontSize: '20px'
    },
    '& .MuiOutlinedInput-root': {
        color: 'white',
        fontSize: '20px',
        '& fieldset': {
            borderColor: 'white',
            borderWidth: '3px',
        },
        '&:hover fieldset': {
            borderColor: '#5052a6',
        },
        '&.Mui-focused fieldset': {
            borderColor: '#5052a6',
            borderWidth: '3px',
        },
    },
});

const Contact = () => {
    const apiKey = process.env.REACT_APP_API_KEY
    const apiService = process.env.REACT_APP_API_SERVICE
    const apiTemplate = process.env.REACT_APP_API_TEMPLATE

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm(apiService, apiTemplate, e.target, apiKey)
        .then(
            () => {
              console.log('EMAIL SENT!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
        
        e.target.reset();
      }
    
      return (
        <div className="container contact-page">
            <span>&lt;form&gt;</span>
            <form onSubmit={sendEmail}>
                <div className='form-container'>
                <CssTextField
                    required
                    id='name' name='user_name' label='Name'
                    margin="normal"
                />
                <CssTextField
                    required
                    id='email' name='user_email' label='Email'
                    margin="normal"
                    type='email'
                />
                <CssTextField
                    required
                    id="message"  name='message' label="Message"
                    margin="normal"
                    multiline
                    rows={4}
                />
                </div>
                <span>&lt;/form&gt;</span>
                <button type="submit">SEND</button>
            </form>
            
        </div>
      );
}

export default Contact