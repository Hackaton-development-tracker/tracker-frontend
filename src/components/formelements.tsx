import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Container, FormHelperText } from '@mui/material';

export const FormContainer = styled(Container)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: 0,
});

export const SuccessLabel = styled(FormHelperText)({
  fontSize: 18,
  lineHeight: '18px',
  padding: '0 6px',
  fontFamily: ['YS Text Regular'].join(','),
  color: 'green',
  textAlign: 'center',
});

export const ErrorLabel = styled(FormHelperText)({
  fontSize: '14px',
  lineHeight: '20px',
  padding: '0 6px',
  fontFamily: 'YS Text Regular',
  color: '#ff0200',
  letterSpacing: 0,
  textAlign: 'center',
});

export const ErrorMessage = styled(FormHelperText)({
  fontSize: '11px',
  fontFamily: 'YS Text Regular',
  color: '#ff0200',
  letterSpacing: 0,
  lineHeight: '1.66'
})

export const LoginInput = styled(InputBase)(({ theme, error }) => ({
  '& .MuiInputBase-input': {
    fontFamily: ['YS Text Regular'],
    borderRadius: 4,
    backgroundColor: '#FFF',
    border: '1px solid',
    borderColor: error ? '#ff0200' : 'rgba(0, 0, 0, 0.23)',
    fontSize: 15,
    minHeight: '56px',
    width: '100%',
    padding: '18px 12px',
    boxSizing: 'border-box',
    transition: theme.transitions.create([
      'background-color',
      'box-shadow',
    ]),
    '&:focus': {
      borderColor: error ? '#ff0200' : '#1D6BF3',
      borderWidth: '2px',
      padding: '18px 11px',
    },
  },
}));