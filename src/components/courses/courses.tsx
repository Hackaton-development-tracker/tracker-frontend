import { Link } from 'react-router-dom';
import styles from './courses.module.scss';
// import coursesData from '../../utils/backendTestData/courses.json';
import { ProfCard } from '../profCard/profCard';
import { COURSES, NEXT_START_DATE, MORE_INFO } from '../../utils/constants';
import {
  TextTypography,
  GreyTypography,
  TitleTypography,
} from '../cardelements';
import {
  hoursToDaysOrMonths,
  formattedDate,
} from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import {
  ICourse,
  coursesSelect,
} from '../../services/redux/slices/courses/courses';
import { useAppSelector } from '../../services/typeHooks';

// renders recommended mini courses
const Courses = () => {
  const courses = useAppSelector(coursesSelect).recommended_courses;
  const courseTitle = (course: ICourse) => (
    <div className={styles.coursesContainer}>
      <div className={styles.coursesTitle}>
        <TitleTypography>{course.title}</TitleTypography>
      </div>
      <GreyTypography>
        {hoursToDaysOrMonths(course.completion_time)}
      </GreyTypography>
    </div>
  );

  const courseContent = (course: ICourse) => (
    <div className={styles.coursesContent}>
      <TextTypography>{course.description}</TextTypography>
      <div className={styles.coursesInfo}>
        <div className={styles.coursesDate}>
          <GreyTypography>{NEXT_START_DATE}</GreyTypography>
          <TextTypography>{formattedDate(course.start_date)}</TextTypography>
        </div>
        <Link to={course.resource.url} target="_blank">
          <SecondaryButton className="button">{MORE_INFO}</SecondaryButton>
        </Link>
      </div>
    </div>
  );

  return (
    courses.length > 0 && (
      <div>
        <TitleTypography>{COURSES}</TitleTypography>
        <div className={styles.courses}>
          {courses.map((course) => (
            <ProfCard
              key={course.id}
              image={course.file}
              title={() => courseTitle(course)}
              content={() => courseContent(course)}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Courses;
