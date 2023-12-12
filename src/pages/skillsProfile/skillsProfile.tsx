import { useEffect } from 'react';
import styles from './skillsProfile.module.scss';
import { CurrentGradeCard } from '../../components/currentGradeCard/currentGradeCard';
import { NextGradeCard } from '../../components/nextGradeCard/nextGradeCard';
import SkillsList from '../../components/skillsList';
import Courses from '../../components/courses/courses';
import Projects from '../../components/projects/projects';
import KnowledgeBase from '../../components/knowledgeBase/knowledgeBase';
import { useAppDispatch } from '../../services/typeHooks';
import { getProfileUser } from '../../services/redux/slices/auth/auth';

function SkillsProfile() {
  const dispatch = useAppDispatch();
  const access = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(getProfileUser({ access }));
  }, [dispatch, access]);

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
