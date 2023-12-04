/* eslint-disable @typescript-eslint/naming-convention */
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
import { TextButton, SecondaryButton, PrimaryButton } from '../buttons';
import CountdownTimer from '../countdownTimer';
import { user } from '../../utils/backendData/data';

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

  const { title, test_date, next_test_date, grade_current, grade_next } = user[0];

  const formattedTestDate = format(parseISO(test_date), 'dd MMMM yyyy', {
    locale: ruLocale,
  });

  const currentTitle = (
    <>
      <div className={styles.gradeCards__title}>
        <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
        <ProfessionTypography>{title}</ProfessionTypography>
      </div>
      <TextButton
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        {CHANGE}
      </TextButton>
    </>
  );

  const currentContent = (
    <>
      <div>
        <SmallTextTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{grade_current}</GradeTypography>
      </div>
      <Link
        href="/map"
        sx={{
          textDecoration: 'none',
        }}
      >
        <SecondaryButton>{OPEN_MAP}</SecondaryButton>
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
            nextTestDate={next_test_date}
            timeRemaining={timeRemaining}
            setTimeRemaining={setTimeRemaining}
          />
        </div>
        <PrimaryButton
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
    <div className={styles.gradeCards}>
      <Card title={currentTitle} content={currentContent}></Card>
      <Card title={nextTitle} content={nextContent}></Card>
    </div>
  );
}

export default GradeCards;
