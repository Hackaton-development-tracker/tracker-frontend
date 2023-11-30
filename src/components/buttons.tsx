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

export const CustomButton = styled(Button)({
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: '#1d6bf3',
  outline: 'none',
  padding: 0,
  textTransform: 'none',
  '&:hover': {
    backgroundColor: 'transparent',
  },
});

export const MainButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  padding: '10px 20px',
  borderRadius: '4px',
  backgroundColor: 'transparent',
  border: '1px solid #1D6BF3',
  fontFamily: ['YS Text Medium'],
  '&:hover': {
    backgroundColor: '#1D6BF3',
    color: '#fff',
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

export const ActionButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  padding: '10px 20px',
  borderRadius: '4px',
  color: '#fff',
  backgroundColor: '#1D6BF3',
  fontFamily: ['YS Text Medium'],
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
  '&:disabled': {
    backgroundColor: '#B5B5B7',
    color: '#fff',
  },
})
