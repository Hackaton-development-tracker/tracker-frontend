import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './courses.module.scss';
import coursesData from '../../utils/backendData/courses.json';
import { ProfCard } from '../profCard/profCard';
import { COURSES, NEXT_START_DATE, MORE_INFO } from '../../utils/constants';
import vars from '../../static/scss/export.module.scss';
import {
  hoursToDaysOrMonths,
  formattedDate,
} from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import thinking from '../../static/assets/images/thinking.svg';
import economics from '../../static/assets/images/economics.svg';
import argumentation from '../../static/assets/images/argumentation.svg'

type Course = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  source: string;
  completion_time: number;
  // image: string;
};

const CourseTitleTypography = styled(Typography)({
  fontFamily: ['YS Display Medium'],
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

const CourseTextTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

const CourseGreyTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlack500}`,
});

const Courses = () => {
  const courseTitle = (course: Course) => (
    <>
      <div className={styles.titlecontainer}>
        <div className={styles.coursetitle}>
          <CourseTitleTypography>{course.title}</CourseTitleTypography>
        </div>
        <CourseGreyTypography>
          {hoursToDaysOrMonths(course.completion_time)}
        </CourseGreyTypography>
      </div>
    </>
  );

  const courseContent = (course: Course) => (
    <div className={styles.coursecontent}>
      <CourseTextTypography>{course.description}</CourseTextTypography>
      <div className={styles.courseinfo}>
        <div className={styles.coursedate}>
          <CourseGreyTypography>{NEXT_START_DATE}</CourseGreyTypography>
          <CourseTextTypography>
            {formattedDate(course.start_date)}
          </CourseTextTypography>
        </div>
        <a href={course.source} target="_blank">
          <SecondaryButton>{MORE_INFO}</SecondaryButton>
        </a>
      </div>
    </div>
  );

  // TODO: get image from server
  const getImage = (courseId: number) => {
    switch (courseId) {
      case 1:
        return thinking;
      case 2:
        return economics;
      case 3:
        return argumentation;
      default:
        return '';
    }
  }

  return (
    <div>
      <CourseTitleTypography>{COURSES}</CourseTitleTypography>
      <div className={styles.coursescontainer}>
        {coursesData[0].recommended_courses.map((course) => (
          <ProfCard
            key={course.id}
            image={getImage(course.id)}
            title={courseTitle(course)}
            content={courseContent(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
