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
import { user } from '../../utils/backendData/user.json';

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
  paddingTop: '8px',
});

const GradeTypography = styled(Typography)({
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: 0,
});

//  renders two cards, first shows information about the user's current level, second shows progress towards the next level
function CurrentGradeCard() {
  const { title, test_date, grade_current } = user[0];

  const formattedTestDate = formattedDate(test_date);

  const currentTitle = (
    <>
      <div className={styles.currenttitle}>
        <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
        <ProfessionTypography>{title}</ProfessionTypography>
      </div>
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

export default CurrentGradeCard;
