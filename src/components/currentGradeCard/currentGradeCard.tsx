/* eslint-disable @typescript-eslint/naming-convention */
import { Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './currentGradeCard.module.scss';
import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_CURRENT_LEVEL_ACHIEVED,
  OPEN_MAP,
} from '../../utils/constants';
import { Card } from '../card/card';
import { SecondaryButton } from '../buttons';
import { formattedDate } from '../../utils/helpers/formatTime';
import userData from '../../utils/backendData/user.json';

// grade cards fonts
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
});

const GradeTypography = styled(Typography)({
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: 0,
});

const { title, test_date, grade_current } = userData;

//  renders two cards, first shows information about the user's current level, second shows progress towards the next level
export function CurrentGradeCard() {
  const formattedTestDate = formattedDate(test_date);

  const currentTitle = (
    <div className={styles.currentTitle}>
      <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
      <ProfessionTypography
        sx={{
          paddingTop: '8px',
        }}
      >
        {title}
      </ProfessionTypography>
    </div>
  );

  const currentContent = (
    <>
      <div>
        <SmallTextTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{grade_current}</GradeTypography>
      </div>
      <Link to="/map">
        <SecondaryButton>{OPEN_MAP}</SecondaryButton>
      </Link>
    </>
  );

  return (
    <Card
      title={currentTitle}
      content={currentContent}
      classname="gradecard"
    ></Card>
  );
}

export function ShortCurrentGradeCard() {
  const formattedTestDate = formattedDate(test_date);

  const currentTitle = (
    <div className={styles.currentContent}>
      <GradeTypography>{grade_current}</GradeTypography>
      <SmallTextTypography>
        {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
      </SmallTextTypography>
    </div>
  );

  const currentContent = (
    <ProfessionTypography sx={{ fontSize: '16px', lineHeight: '20px' }}>
      {title}
    </ProfessionTypography>
  );

  return (
    <Card
      title={currentTitle}
      content={currentContent}
      classname="shortgradecard"
    ></Card>
  );
}
