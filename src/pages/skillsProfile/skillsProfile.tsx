import { useEffect } from 'react';
import styles from './skillsProfile.module.scss';
import { CurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { NextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillsList';
import Courses from '../../components/courses/courses';
import Projects from '../../components/projects/projects';
import KnowledgeBase from '../../components/knowledgeBase/knowledgeBase';
import { useAppDispatch } from '../../services/typeHooks';
import { getSkillsApi } from '../../services/redux/slices/skills/skills';
import { getKnowledgeApi } from '../../services/redux/slices/knowledge/knowledge';
import { getProjectsApi } from '../../services/redux/slices/projects/projects';
import { getCoursesApi } from '../../services/redux/slices/courses/courses';

function SkillsProfile() {
  const dispatch = useAppDispatch();
  const token = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(getSkillsApi({ token }));
    dispatch(getCoursesApi({ token }));
    dispatch(getKnowledgeApi({ token }));
    dispatch(getProjectsApi({ token }));
  }, []);

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
