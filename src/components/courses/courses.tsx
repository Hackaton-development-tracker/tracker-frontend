import { Link } from 'react-router-dom';
import styles from './courses.module.scss';
import coursesData from '../../utils/backendData/courses.json';
import { ProfCard } from '../profCard/profCard';
import { COURSES, NEXT_START_DATE, MORE_INFO } from '../../utils/constants';
import { TextTypography, GreyTypography, TitleTypography } from '../cardelements';
import {
  hoursToDaysOrMonths,
  formattedDate,
} from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import thinking from '../../static/assets/images/thinking.svg';
import economics from '../../static/assets/images/economics.svg';
import argumentation from '../../static/assets/images/argumentation.svg';

interface ICourse {
  id: number;
  title: string;
  description: string;
  start_date: string;
  source: string;
  completion_time: number;
  // TODO: image: string;
};

// renders recommended mini courses
const Courses = () => {
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
        <div className={styles.courseDate}>
          <GreyTypography>{NEXT_START_DATE}</GreyTypography>
          <TextTypography>
            {formattedDate(course.start_date)}
          </TextTypography>
        </div>
        <Link to={course.source} target="_blank">
          <SecondaryButton>{MORE_INFO}</SecondaryButton>
        </Link>
      </div>
    </div>
  );

  // TODO: get images from server
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
  };

  return (
    <div>
      <TitleTypography>{COURSES}</TitleTypography>
      <div className={styles.courses}>
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
