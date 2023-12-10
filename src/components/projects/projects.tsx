import { Link } from 'react-router-dom';
import styles from './projects.module.scss';
import projectsData from '../../utils/backendData/projects.json';
import { Card } from '../card/card';
import { PROJECTS, MORE_INFO } from '../../utils/constants';
import { TitleTypography, TextTypography, GreyTypography } from '../cardelements';
import { formattedDate } from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import hackathon from '../../static/assets/icons/hackathon.svg';
import alpha from '../../static/assets/icons/alpha.svg';

interface IProject {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
};

const Projects = () => {
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
        {projectsData[0].recommended_projects.map((project) => (
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
