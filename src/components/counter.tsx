import { Avatar, Typography, styled } from '@mui/material';

// counter elements
const CounterAvatar = styled(Avatar)(({ color }) => ({
  width: '24px',
  height: '24px',
  backgroundColor: color,
}));

const CounterTypography = styled(Typography)({
  color: '#fff',
  fontFamily: 'YS Text Medium',
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: 0,
});

interface CounterProps {
  number: number;
  color: string;
}

// renders a counter component
const Counter: React.FC<CounterProps> = ({ number, color }) => (
  <CounterAvatar color={color}>
    <CounterTypography>{number}</CounterTypography>
  </CounterAvatar>
);

export default Counter;
