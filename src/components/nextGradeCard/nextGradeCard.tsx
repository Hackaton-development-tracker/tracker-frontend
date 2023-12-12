/* eslint-disable @typescript-eslint/naming-convention */
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './nextGradeCard.module.scss';
import vars from '../../static/scss/export.module.scss';
import {
  USER_NEXT_LEVEL,
  USER_NEXT_LEVEL_ACHIEVED,
  RETAKE_TEST,
  TEST_RETAKE_DAYS,
  ROUTE_STEP1,
} from '../../utils/constants';
import { Card } from '../card/card';
import {
  TextTypography,
  SmallTextTypography,
  GradeTypography,
  PercentTypography,
} from '../cardelements';
import ProgressBar from '../progressBar';
import { PrimaryButton } from '../buttons';
import CountdownTimer from '../countdownTimer';
// import userData from '../../utils/backendTestData/user.json';
import { IUser } from '../../services/redux/slices/auth/auth';

// renders main grade card with next grade
export function NextGradeCard({ user }: { user: IUser }) {
  const navigate = useNavigate();
  const [progressValue, setProgressValue] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const handleTestRetake = () => {
    navigate(ROUTE_STEP1);
  };
  console.log(timeRemaining);

  const nextTitle = (
    <div>
      <SmallTextTypography>{USER_NEXT_LEVEL}</SmallTextTypography>
      <div className={styles.next__title}>
        <GradeTypography
          sx={{
            color: vars.colorBlueMain,
          }}
        >
          {user.next_grade.title}
        </GradeTypography>
        <TextTypography
          sx={{
            paddingRight: '4px',
            paddingLeft: '8px',
          }}
        >
          {USER_NEXT_LEVEL_ACHIEVED}
        </TextTypography>
        <PercentTypography>{Math.trunc(progressValue)}&#37;</PercentTypography>
      </div>
    </div>
  );

  const nextContent = (
    <div className={styles.next__container}>
      <div className={styles.next__content}>
        <ProgressBar
          progressValue={progressValue}
          setProgressValue={setProgressValue}
        />
      </div>
      <div className={styles.countdown}>
        <div style={{ display: 'flex' }}>
          <SmallTextTypography
            sx={{
              paddingRight: '4px',
            }}
          >
            {TEST_RETAKE_DAYS}
          </SmallTextTypography>
          <CountdownTimer
            nextTestDate={user.next_test_date}
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

// renders short card with next grade
export function ShortNextGradeCard({ user }: { user: IUser }) {
  const [progressValue, setProgressValue] = useState(0);

  const nextTitle = (
    <div>
      <div className={styles.next__title}>
        <GradeTypography
          sx={{
            color: vars.colorBlueMain,
          }}
        >
          {user.next_grade.title}
        </GradeTypography>
        <TextTypography
          sx={{
            paddingRight: '4px',
            paddingLeft: '8px',
          }}
        >
          {USER_NEXT_LEVEL_ACHIEVED}
        </TextTypography>
        <PercentTypography>{Math.trunc(progressValue)}&#37;</PercentTypography>
      </div>
    </div>
  );

  const nextContent = (
    <div className={styles.next__content}>
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
