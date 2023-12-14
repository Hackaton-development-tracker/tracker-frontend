import { Link } from 'react-router-dom';
import styles from './projects.module.scss';
// import projectsData from '../../utils/backendTestData/projects.json';
import { Card } from '../card/card';
import { PROJECTS, MORE_INFO } from '../../utils/constants';
import {
  TitleTypography,
  TextTypography,
  GreyTypography,
} from '../cardelements';
import { formattedDate } from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import {
  IProject,
  projectsSelect,
} from '../../services/redux/slices/projects/projects';
import { useAppSelector } from '../../services/typeHooks';

// renders projects from Workshop
const Projects = () => {
  const projects = useAppSelector(projectsSelect).recommended_projects;

  const projectTitle = (project: IProject) => (
    <div className={styles.projectTitleContainer}>
      <img
        src={project.file}
        alt={project.title}
        className={styles.projectImg}
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
    projects.length > 0 && (
      <div>
        <TitleTypography>{PROJECTS}</TitleTypography>
        <div className={styles.projectContainer}>
          {projects.map((project) => (
            <Card
              key={project.id}
              title={projectTitle(project)}
              content={projectContent(project)}
              classname={styles.projectCard}
            />
          ))}
        </div>
      </div>
    )
  );
};

export default Projects;
