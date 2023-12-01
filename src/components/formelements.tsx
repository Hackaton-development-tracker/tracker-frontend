import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Box, Container, FormHelperText, Paper } from '@mui/material';

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

export const LogOutButton = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    borderRadius: 24,
    position: 'relative',
    backgroundColor: '#FFF',
    border: '1px solid',
    borderColor: '#858585',
    padding: '10px 12px',
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    fontFamily: ['YS Display'].join(','),
    '&:focus': {},
  },
}));

export const CustomPaper = styled(Paper)({
  padding: '16px 16px 24px 16px',
  textAlign: 'center',
  borderRadius: 24,
  boxShadow: 'none',
  overflow: 'hidden',
});

export const LeftDescBlock = styled(Box)({
  flex: 1,
});

export const RightDescBlock = styled(Box)({
  width: '124px',
  textAlign: 'left',
});

export const TitleDesc = styled(Box)({
  fontSize: '16px',
  fontStyle: 'normal',
  fontWeight: '500',
  lineHeight: '20px',
  marginBottom: '12px',
  color: '#9B9B9E',
});

export const LineDesc = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '8px',
});

export const LineDescLeftPart = styled(Box)({
  textAlign: 'left',
  color: '#9B9B9E',
  fontSize: '14px',
});

export const LineDescRightPart = styled(Box)({
  textAlign: 'right',
  color: '#292929',
  fontWeight: '500',
  fontSize: '16px',
});

export const TitleGraphBlock = styled(Box)({
  height: '40px',
  display: 'flex',
  alignItems: 'start',
  textAlign: 'left',
  marginBottom: '16px',
});

export const TitleGraph = styled(Box)({
  fontSize: '16px',
  fontWeight: '500',
  lineHeight: '20px',
  marginRight: '8px',
});

export const TitleList = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: 'auto',
});

export const TitleListLi = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  marginLeft: '12px',
});

export const TitleListSpan = styled(Box)({
  width: '10px',
  height: '10px',

  borderRadius: '50%',
  marginRight: '4px',
});
