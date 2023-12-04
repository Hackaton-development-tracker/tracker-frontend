import React, { useEffect } from 'react';
import { Typography } from '@mui/material';
import { formatTime } from '../utils/helpers/formatTime';

interface CountdownTimerProps {
  nextTestDate: string;
  timeRemaining: number | null;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number | null>>;
}

// renders a countdown timer
const CountdownTimer: React.FC<CountdownTimerProps> = ({
  nextTestDate,
  timeRemaining,
  setTimeRemaining,
}) => {
  useEffect(() => {
    // calculates the time remaining between the current date and the next test date
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const targetDate = new Date(nextTestDate);
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      const secondsRemaining = Math.ceil(timeDifference / 1000);

      setTimeRemaining(secondsRemaining);
    };

    // updates the timer by calculating the remaining time and setting a timeout
    const updateTimer = () => {
      calculateTimeRemaining();

      if (timeRemaining && timeRemaining > 0) {
        setTimeout(updateTimer, 1000);
      }
    };

    updateTimer();
  }, [nextTestDate, timeRemaining]);

  return (
    <>
      {timeRemaining !== null && timeRemaining > 0 && (
        <Typography
          sx={{
            fontFamily: 'YS Text Medium',
            fontSize: '13px',
            lineHeight: '16px',
            letterSpacing: 0,
          }}
        >
          {formatTime(timeRemaining)}
        </Typography>
      )}
    </>
  );
};

export default CountdownTimer;
