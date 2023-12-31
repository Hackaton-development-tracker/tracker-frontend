import styles from '../developmentMap/developmentMap.module.scss';
import { ShortCurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { ShortNextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import DevelopSkillsList from '../../components/developSkillsList';
// import skillsData from '../utils/backendTestData/skills.json';

function DevelopmentMap() {
  return (
    <div className={styles.map}>
      <div className={styles.gradecards}>
        <ShortCurrentGradeCard />
        <ShortNextGradeCard />
      </div>
      <DevelopSkillsList />
    </div>
  );
}

export default DevelopmentMap;
