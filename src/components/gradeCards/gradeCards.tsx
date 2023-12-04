import { useState } from 'react';
import { format, parseISO } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { Link, Typography, styled } from '@mui/material';
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

// grade cards fonts
const CountdownTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
});

const SmallTextTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
});

const ProfessionTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '18px',
  lineHeight: '24px',
  paddingTop: '8px',
});

const GradeTypography = styled(Typography)({
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: 0,
});

const PercentTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '16px',
  lineHeight: '20px',
  color: vars.colorBlueMain,
  letterSpacing: 0,
});

//  renders two cards, first shows information about the user's current level, second shows progress towards the next level
function GradeCards() {
  const [progressValue, setProgressValue] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const formattedTestDate = format(parseISO(testDate), 'dd MMMM yyyy', {
    locale: ruLocale,
  });

  const currentTitle = (
    <>
      <div className={styles.gradeCards__title}>
        <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
        <ProfessionTypography>{userTitle}</ProfessionTypography>
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
        <SmallTextTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{userCurrentLevel}</GradeTypography>
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
      <SmallTextTypography>{USER_NEXT_LEVEL}</SmallTextTypography>
      <div className={styles.gradeCards__nextTitle}>
        <GradeTypography
          sx={{
            color: vars.colorBlueMain,
          }}
        >
          {userNextLevel}
        </GradeTypography>
        <CardTypography
          sx={{
            paddingRight: '4px',
            paddingLeft: '8px',
          }}
        >
          {USER_NEXT_LEVEL_ACHIEVED}
        </CardTypography>
        <PercentTypography>{progressValue}&#37;</PercentTypography>
      </div>
    </div>
  );

  const nextContent = (
    <div className={styles.gradeCards__content}>
      <div className={styles.gradeCards__nextContent}>
        <ProgressBar
          progressValue={progressValue}
          setProgressValue={setProgressValue}
        />
      </div>
      <div className={styles.gradeCards__countdown}>
        <div style={{ display: 'flex' }}>
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
        </div>
        <ActionButton
          disabled={(timeRemaining as number) > 0}
          sx={{
            marginLeft: '16px',
          }}
        >
          {RETAKE_TEST}
        </ActionButton>
      </div>
    </div>
  );

  return (
    <div className={styles.gradeCards}>
      <Card title={currentTitle} content={currentContent}></Card>
      <Card title={nextTitle} content={nextContent}></Card>
    </div>
  );
}

export default GradeCards;
