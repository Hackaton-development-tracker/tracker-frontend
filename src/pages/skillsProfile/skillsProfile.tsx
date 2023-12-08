import styles from './skillsProfile.module.scss';
import CurrentGradeCard from '../../components/currentGradeCard/currentGradeCard';
import NextGradeCard from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillList/skillsList';
import Courses from '../../components/courses/courses';
import Projects from '../../components/projects/projects';

function SkillsProfile() {
  return (
    <div className={styles.profile}>
      <div className={styles.gradecards}>
        <CurrentGradeCard />
        <NextGradeCard />
      </div>
      <SkillsList />
      <Courses />
      <Projects />
    </div>
  );
}

export default SkillsProfile;
