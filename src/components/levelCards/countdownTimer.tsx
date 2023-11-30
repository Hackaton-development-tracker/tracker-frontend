import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import { CardTypography } from './levelCardsElements';
import { TEST_RETAKE_DAYS } from '../../utils/constants';
import { formatTime } from '../../utils/formatTime';

interface CountdownTimerProps {
  nextTestDate: string;
  timeRemaining: number | null;
  setTimeRemaining: React.Dispatch<React.SetStateAction<number | null>>;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  nextTestDate,
  timeRemaining,
  setTimeRemaining,
}) => {
  useEffect(() => {
    const calculateTimeRemaining = () => {
      const currentDate = new Date();
      const targetDate = new Date(nextTestDate);
      const timeDifference = targetDate.getTime() - currentDate.getTime();
      const secondsRemaining = Math.ceil(timeDifference / 1000);

      setTimeRemaining(secondsRemaining);
    };

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
      {timeRemaining !== null && timeRemaining > 0 ? (
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <CardTypography
            sx={{
              paddingRight: '4px',
            }}
          >
            {TEST_RETAKE_DAYS}
          </CardTypography>
          <CardTypography
            sx={{
              fontFamily: 'YS Text Medium',
            }}
          >
            {formatTime(timeRemaining)}
          </CardTypography>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
};

export default CountdownTimer;
