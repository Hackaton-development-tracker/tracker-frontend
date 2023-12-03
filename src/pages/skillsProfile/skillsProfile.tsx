import styles from './skillsProfile.module.scss';
import LevelCard from '../../components/levelCard/levelCard';
import SkillsList from '../../components/skillsList';

function SkillsProfile() {
  return (
    <div className={styles.skillsProfile}>
      <LevelCard />
      <SkillsList />
      <div>Рекомендуемые мини курсы</div>
    </div>
  );
}

export default SkillsProfile;
