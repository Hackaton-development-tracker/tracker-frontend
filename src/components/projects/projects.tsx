import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './projects.module.scss';
// import projectsData from '../../utils/backendTestData/projects.json';
import { Card } from '../card/card';
import { PROJECTS, MORE_INFO } from '../../utils/constants';
import { TitleTypography, TextTypography, GreyTypography } from '../cardelements';
import { formattedDate } from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import hackathon from '../../static/assets/icons/hackathon.svg';
import alpha from '../../static/assets/icons/alpha.svg';
import { IProject, getProjectsApi, projectsSelect } from '../../services/redux/slices/projects/projects';
import { useAppDispatch, useAppSelector } from '../../services/typeHooks';

// renders projects from Workshop
const Projects = () => {
  const dispatch = useAppDispatch();
  const projects = useAppSelector(projectsSelect);
  const token = localStorage.getItem('accessToken') ?? '';

  useEffect(() => {
    dispatch(getProjectsApi({ token }));
  }, []);
  
  // data from utils/backendTestData
  //const sourceList = sources.recommended_projects || [];

  const projectTitle = (project: IProject) => (
    <div className={styles.projectTitleContainer}>
      <img
        src={project.title === 'Хакатон+' ? hackathon : alpha}
        alt={project.title}
      />
      <TitleTypography>{project.title}</TitleTypography>
    </div>
  );

  const projectContent = (project: IProject) => (
    <div className={styles.projectContent}>
      <TextTypography>{project.description}</TextTypography>
      <div className={styles.projectInfo}>
        <GreyTypography>
          {formattedDate(project.start_date) +
            ' - ' +
            formattedDate(project.end_date)}
        </GreyTypography>
        <Link to="/workshop">
          <SecondaryButton>{MORE_INFO}</SecondaryButton>
        </Link>
      </div>
    </div>
  );

  return (
    <div>
      <TitleTypography>{PROJECTS}</TitleTypography>
      <div className={styles.projectContainer}>
        {projects.recommended_projects.map((project) => (
          <Card
            key={project.id}
            title={projectTitle(project)}
            content={projectContent(project)}
            classname={styles.projectCard}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
