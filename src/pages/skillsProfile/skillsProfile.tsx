import styles from './skillsProfile.module.scss';
import CurrentGradeCard from '../../components/currentGradeCard/currentGradeCard';
import NextGradeCard from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillsList';

function SkillsProfile() {
  return (
    <div className={styles.profile}>
      <div className={styles.gradecards}>
        <CurrentGradeCard />
        <NextGradeCard />
      </div>
      <SkillsList />
      <div>Рекомендуемые мини курсы</div>
    </div>
  );
}

export default SkillsProfile;
