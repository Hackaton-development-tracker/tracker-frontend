import { styled } from '@mui/material/styles';
import { Button } from '@mui/material';

export const LoginButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '16px',
  lineHeight: '20px',
  padding: '15px 24px',
  borderRadius: '4px',
  backgroundColor: '#5A9BFF',
  fontFamily: ['YS Text Medium'],
  letterSpacing: 0,
  '&:hover': {
    backgroundColor: '#1D6BF3',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: '#0062cc',
  },
  '&:focus': {
    boxShadow: 'none',
  },
});