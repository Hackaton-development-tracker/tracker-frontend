import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { Box, Link, Typography, styled } from '@mui/material';
import styles from './gradeCards.module.scss';
import vars from '../../static/scss/export.module.scss';
import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_NEXT_LEVEL,
  USER_NEXT_LEVEL_ACHIEVED,
  USER_CURRENT_LEVEL_ACHIEVED,
  RETAKE_TEST,
  CHANGE,
  OPEN_MAP,
  TEST_RETAKE_DAYS,
} from '../../utils/constants';
import { CardTypography, Card } from '../card/card';
import ProgressBar from '../progressBar';
import { CustomButton, MainButton, ActionButton } from '../buttons';
import CountdownTimer from '../countdownTimer';
import {
  userTitle,
  userCurrentLevel,
  testDate,
  nextTestDate,
  userNextLevel,
} from '../../utils/backendData/constantsBackend';

function GradeCards() {
  const [progressValue, setProgressValue] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const formattedTestDate = format(parseISO(testDate), 'dd MMMM yyyy', {
    locale: ruLocale,
  });

  const CountdownTypography = styled(Typography)({
    fontFamily: 'YS Text Regular',
    fontSize: '13px',
    lineHeight: '16px',
    letterSpacing: 0,
  });

  const currentTitle = (
    <>
      <div className={styles.gradeCards__title}>
        {USER_TITLE}
        <CardTypography
          sx={{
            fontFamily: 'YS Text Medium',
            fontSize: '18px',
            lineHeight: '24px',
            paddingTop: '8px',
          }}
        >
          {userTitle}
        </CardTypography>
      </div>
      <CustomButton
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        {CHANGE}
      </CustomButton>
    </>
  );

  const currentContent = (
    <>
      <div>
        <CardTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </CardTypography>
        <CardTypography
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
          }}
        >
          {userCurrentLevel}
        </CardTypography>
      </div>
      <Link
        href="/map"
        sx={{
          textDecoration: 'none',
        }}
      >
        <MainButton>{OPEN_MAP}</MainButton>
      </Link>
    </>
  );

  const nextTitle = (
    <div className={styles.gradeCards__title}>
      {USER_NEXT_LEVEL}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'baseline',
        }}
      >
        <CardTypography
          sx={{
            fontSize: '24px',
            lineHeight: '32px',
            color: vars.colorBlueMain,
          }}
        >
          {userNextLevel}
        </CardTypography>
        <CardTypography
          sx={{
            fontSize: '14px',
            lineHeight: '20px',
            paddingRight: '4px',
            paddingLeft: '8px',
          }}
        >
          {USER_NEXT_LEVEL_ACHIEVED}
        </CardTypography>
        <CardTypography
          sx={{
            fontSize: '16px',
            lineHeight: '20px',
            color: vars.colorBlueMain,
          }}
        >
          {progressValue}&#37;
        </CardTypography>
      </Box>
    </div>
  );

  const nextContent = (
    <div className={styles.gradeCards__content}>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
          alignItems: 'center',
          gap: '16px',
        }}
      >
        <ProgressBar
          progressValue={progressValue}
          setProgressValue={setProgressValue}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
          }}
        >
          <CountdownTypography
            sx={{
              paddingRight: '4px',
            }}
          >
            {TEST_RETAKE_DAYS}
          </CountdownTypography>
          <CountdownTimer
            nextTestDate={nextTestDate}
            timeRemaining={timeRemaining}
            setTimeRemaining={setTimeRemaining}
          />
        </Box>
        <ActionButton
          disabled={(timeRemaining as number) > 0}
          sx={{
            marginLeft: '16px',
          }}
        >
          {RETAKE_TEST}
        </ActionButton>
      </Box>
    </div>
  );

  return (
    <>
      <div className={styles.gradeCards}>
        <Card title={currentTitle} content={currentContent}></Card>
        <Card title={nextTitle} content={nextContent}></Card>
      </div>
    </>
  );
}

export default GradeCards;
