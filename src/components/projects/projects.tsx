import { Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import styles from './projects.module.scss';
import projectsData from '../../utils/backendData/projects.json';
import { Card } from '../card/card';
import { PROJECTS, MORE_INFO } from '../../utils/constants';
import vars from '../../static/scss/export.module.scss';
import { formattedDate } from '../../utils/helpers/formatTime';
import { SecondaryButton } from '../buttons';
import hackathon from '../../static/assets/icons/hackathon.svg';
import alpha from '../../static/assets/icons/alpha.svg';

type Project = {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
};

const ProjectTitleTypography = styled(Typography)({
  fontFamily: ['YS Display Medium'],
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

const ProjectTextTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

const ProjectGreyTypography = styled(Typography)({
  fontFamily: ['YS Text Regular'],
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
  color: `${vars.colorBlack500}`,
});

const Projects = () => {
  const projectTitle = (project: Project) => (
    <div className={styles.titlecontainer}>
      <img
        src={project.title === 'Хакатон+' ? hackathon : alpha}
        alt={project.title}
      />
      <ProjectTitleTypography>{project.title}</ProjectTitleTypography>
    </div>
  );

  const projectContent = (project: Project) => (
    <div className={styles.projectcontent}>
      <ProjectTextTypography>{project.description}</ProjectTextTypography>
      <div className={styles.projectinfo}>
        <ProjectGreyTypography>
          {formattedDate(project.start_date) +
            ' - ' +
            formattedDate(project.end_date)}
        </ProjectGreyTypography>
        <a href="/" target="_blank">
          <SecondaryButton>{MORE_INFO}</SecondaryButton>
        </a>
      </div>
    </div>
  );

  return (
    <div>
      <ProjectTitleTypography>{PROJECTS}</ProjectTitleTypography>
      <div className={styles.projectscontainer}>
        {projectsData[0].recommended_projects.map((project) => (
          <Card
            key={project.id}
            title={projectTitle(project)}
            content={projectContent(project)}
            classname={styles.card}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
