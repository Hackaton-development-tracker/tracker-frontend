import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './courses.module.scss';
// import coursesData from '../../utils/backendTestData/courses.json';
import { ProfCard } from '../profCard/profCard';
import { COURSES, NEXT_START_DATE, MORE_INFO } from '../../utils/constants';
import { TextTypography, GreyTypography, TitleTypography } from '../cardelements';
import {
  // hoursToDaysOrMonths,
  formattedDate,
} from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import thinking from '../../static/assets/images/thinking.svg';
import economics from '../../static/assets/images/economics.svg';
import argumentation from '../../static/assets/images/argumentation.svg';
import { ICourse, getCoursesApi, coursesSelect } from '../../services/redux/slices/courses/courses';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';

// renders recommended mini courses
const Courses = () => {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(getCoursesApi({ token }));
  }, [dispatch, token]);

  const courses = useAppSelector(coursesSelect);

  // data from utils/backendTestData
  // const courseList = courses.recommended_courses || [];

  const testLink = "https://practicum.yandex.ru/thinking"

  const courseTitle = (course: ICourse) => (  
    <div className={styles.coursesContainer}>
      <div className={styles.coursesTitle}>
        <TitleTypography>{course.title}</TitleTypography>
      </div>
    </div>
  );

  const courseContent = (course: ICourse) => (
    <div className={styles.coursesContent}>
      <TextTypography>{course.description}</TextTypography>
      <div className={styles.coursesInfo}>
        <div className={styles.coursesDate}>
          <GreyTypography>{NEXT_START_DATE}</GreyTypography>
          <TextTypography>
            {formattedDate(course.start_date)}
          </TextTypography>
        </div>
        <Link to={testLink} target="_blank">
          <SecondaryButton className="button">{MORE_INFO}</SecondaryButton>
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
        {courses.recommended_courses.map((course) => (
          <ProfCard
            key={course.id}
            image={getImage(course.id)}
            title={() => courseTitle(course)}
            content={() => courseContent(course)}
          />
        ))}
      </div>
    </div>
  );
};

export default Courses;
