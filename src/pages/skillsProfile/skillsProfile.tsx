import styles from './skillsProfile.module.scss';
import { CurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { NextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillsList';
import Courses from '../../components/courses/courses';
import Projects from '../../components/projects/projects';
import KnowledgeBase from '../../components/knowledgeBase/knowledgeBase';

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
      <KnowledgeBase />
    </div>
  );
}

export default SkillsProfile;
