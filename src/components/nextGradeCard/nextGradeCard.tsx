/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import styles from './nextGradeCard.module.scss';
import vars from '../../static/scss/export.module.scss';
import {
  USER_NEXT_LEVEL,
  USER_NEXT_LEVEL_ACHIEVED,
  RETAKE_TEST,
  TEST_RETAKE_DAYS,
  ROUTE_STEP1,
} from '../../utils/constants';
import { CardTypography, Card } from '../card/card';
import ProgressBar from '../progressBar';
import { PrimaryButton } from '../buttons';
import CountdownTimer from '../countdownTimer';
import userData from '../../utils/backendData/user.json';

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

const { next_test_date, grade_next } = userData;

//  renders two cards, first shows information about the user's current level, second shows progress towards the next level
export function NextGradeCard() {
  const navigate = useNavigate();
  const [progressValue, setProgressValue] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const handleTestRetake = () => {
    navigate(ROUTE_STEP1);
  };

  const nextTitle = (
    <div>
      <SmallTextTypography>{USER_NEXT_LEVEL}</SmallTextTypography>
      <div className={styles.nextTitle}>
        <GradeTypography
          sx={{
            color: vars.colorBlueMain,
          }}
        >
          {grade_next}
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
    <div className={styles.nextContainer}>
      <div className={styles.nextContent}>
        <ProgressBar
          progressValue={progressValue}
          setProgressValue={setProgressValue}
        />
      </div>
      <div className={styles.countdown}>
        <div style={{ display: 'flex' }}>
          <CountdownTypography
            sx={{
              paddingRight: '4px',
            }}
          >
            {TEST_RETAKE_DAYS}
          </CountdownTypography>
          <CountdownTimer
            nextTestDate={next_test_date}
            timeRemaining={timeRemaining}
            setTimeRemaining={setTimeRemaining}
          />
        </div>
        <PrimaryButton
          onClick={handleTestRetake}
          disabled={(timeRemaining as number) > 0}
          sx={{
            fontSize: '14px',
            padding: '10px 20px',
            marginLeft: '16px',
          }}
        >
          {RETAKE_TEST}
        </PrimaryButton>
      </div>
    </div>
  );

  return (
    <Card title={nextTitle} content={nextContent} classname="gradecard"></Card>
  );
}

export function ShortNextGradeCard() {
  const [progressValue, setProgressValue] = useState(0);

  const nextTitle = (
    <div>
      <div className={styles.nextTitle}>
        <GradeTypography
          sx={{
            color: vars.colorBlueMain,
          }}
        >
          {grade_next}
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
    <div className={styles.nextContent}>
      <ProgressBar
        progressValue={progressValue}
        setProgressValue={setProgressValue}
      />
    </div>
  );

  return (
    <Card
      title={nextTitle}
      content={nextContent}
      classname="shortgradecard"
    ></Card>
  );
}
