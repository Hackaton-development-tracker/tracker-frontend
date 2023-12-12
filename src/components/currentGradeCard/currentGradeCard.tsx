import { Link } from 'react-router-dom';
import styles from './currentGradeCard.module.scss';
import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_CURRENT_LEVEL_ACHIEVED,
  OPEN_MAP,
  ROUTE_DEVELOPMENT_MAP,
} from '../../utils/constants';
import { Card } from '../card/card';
import {
  SmallTextTypography,
  GradeTypography,
  ProfessionTypography,
} from '../cardelements';
import { SecondaryButton } from '../buttons';
import { formattedDate } from '../../utils/helpers/formatTime';
import { selectUser } from '../../services/redux/slices/auth/auth';
import { useAppSelector } from '../../services/typeHooks';

//  renders main card with current grade
export function CurrentGradeCard() {
  const { user } = useAppSelector(selectUser);

  const formattedTestDate = formattedDate(user.test_date);
  const currentTitle = (
    <div className={styles.currentTitle}>
      <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
      <ProfessionTypography
        sx={{
          paddingTop: '8px',
        }}
      >
        {user.specializations[0] && user.specializations[0].title}
      </ProfessionTypography>
    </div>
  );

  const currentContent = (
    <>
      <div>
        <SmallTextTypography>
          {USER_CURRENT_LEVEL}{' '}
          {user.test_date &&
            USER_CURRENT_LEVEL_ACHIEVED + ' ' + formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{user.grades[0].title}</GradeTypography>
      </div>
      <Link to={ROUTE_DEVELOPMENT_MAP}>
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
  const { user } = useAppSelector(selectUser);

  const formattedTestDate = formattedDate(user.test_date);

  const currentTitle = (
    <div className={styles.currentContent}>
      <GradeTypography>{user.grades[0].title}</GradeTypography>
      <SmallTextTypography>
        {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
      </SmallTextTypography>
    </div>
  );

  const currentContent = (
    <ProfessionTypography sx={{ fontSize: '16px', lineHeight: '20px' }}>
      {user.specializations[0] && user.specializations[0].title}
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
