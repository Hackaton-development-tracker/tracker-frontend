/* eslint-disable @typescript-eslint/naming-convention */
import { Link } from 'react-router-dom';
import styles from './currentGradeCard.module.scss';
import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_CURRENT_LEVEL_ACHIEVED,
  OPEN_MAP,
} from '../../utils/constants';
import { Card } from '../card/card';
import {
  SmallTextTypography,
  GradeTypography,
  ProfessionTypography,
} from '../cardelements';
import { SecondaryButton } from '../buttons';
import { formattedDate } from '../../utils/helpers/formatTime';
import userData from '../../utils/backendTestData/user.json';

const specializationTitle = userData.specializations[0].title;
const gradeTitle = userData.grades[0].title;
const testDate = userData.test_date;
const nextTestDate = userData.next_test_date;

//  renders main card with current grade
export function CurrentGradeCard() {
  const formattedTestDate = formattedDate(testDate);

  console.log(styles);

  const currentTitle = (
    <div className={styles.current__title}>
      <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
      <ProfessionTypography
        sx={{
          paddingTop: '8px',
        }}
      >
        {specializationTitle}
      </ProfessionTypography>
    </div>
  );

  const currentContent = (
    <>
      <div>
        <SmallTextTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{gradeTitle}</GradeTypography>
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

//  renders short card with current grade
export function ShortCurrentGradeCard() {
  const formattedTestDate = formattedDate(nextTestDate);

  const currentTitle = (
    <div className={styles.current__content}>
      <GradeTypography>{gradeTitle}</GradeTypography>
      <SmallTextTypography>
        {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
      </SmallTextTypography>
    </div>
  );

  const currentContent = (
    <ProfessionTypography sx={{ fontSize: '16px', lineHeight: '20px' }}>
      {specializationTitle}
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
