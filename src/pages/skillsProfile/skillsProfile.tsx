import styles from './skillsProfile.module.scss';
import GradeCards from '../../components/gradeCards/gradeCards';
import SkillsList from '../../components/skillsList';

function SkillsProfile() {
  return (
    <div className={styles.skillsProfile}>
      <GradeCards />
      <SkillsList />
      <div>Рекомендуемые мини курсы</div>
    </div>
  );
}

export default SkillsProfile;
