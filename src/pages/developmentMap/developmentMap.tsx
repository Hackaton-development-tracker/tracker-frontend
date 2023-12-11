import { useSelector } from 'react-redux';
import styles from '../developmentMap/developmentMap.module.scss';
import { ShortCurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { ShortNextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import DevelopSkillsList from '../../components/developSkillsList';
import { selectUser } from '../../services/redux/slices/auth/auth';

function DevelopmentMap() {
  const { user } = useSelector(selectUser);

  return (
    <div className={styles.map}>
      <div className={styles.gradecards}>
        <ShortCurrentGradeCard user={user} />
        <ShortNextGradeCard user={user} />
      </div>
      <DevelopSkillsList />
    </div>
  );
}

export default DevelopmentMap;
