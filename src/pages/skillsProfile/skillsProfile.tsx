import styles from './skillsProfile.module.scss';
import { useSelector } from 'react-redux';
import { CurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { NextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillsList';
import Courses from '../../components/courses/courses';
import Projects from '../../components/projects/projects';
import KnowledgeBase from '../../components/knowledgeBase/knowledgeBase';
import { selectUser } from '../../services/redux/slices/auth/auth';

function SkillsProfile() {
  const { user } = useSelector(selectUser);

  return (
    <div className={styles.profile}>
      <div className={styles.gradecards}>
        <CurrentGradeCard user={user} />
        <NextGradeCard user={user} />
      </div>
      <SkillsList />
      <Courses />
      <Projects />
      <KnowledgeBase />
    </div>
  );
}

export default SkillsProfile;
