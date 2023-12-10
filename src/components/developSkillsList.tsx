import { Paper, styled } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import { ISkill } from './levelelements';
import { SKILLS_TO_IMPROVE, ACHIEVED_SKILLS } from '../utils/constants';

import skillsData from '../utils/backendData/skills.json';
import DevelopSkills from './developSkills/developSkills';

// skillList elements
const SkillsListContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  paddingTop: 0,
  borderRadius: '8px',
  width: '100%',
  gap: '12px',
});

// renders a list of skills with an expand and collapse buttons
const DevelopSkillsList = () => {
  const skillsToImprove: ISkill[] = skillsData[0].skillsToImprove || [];
  const achievedSkills: ISkill[] = skillsData[1].achievedSkills || [];

  return (
    <SkillsListContainer elevation={0}>
      <DevelopSkills
        header={SKILLS_TO_IMPROVE}
        skillsToImprove
        counterColor={vars.colorBlueMain}
        skillsArray={skillsToImprove}
        borderColor={vars.colorBlueMain}
      />
      <DevelopSkills
        header={ACHIEVED_SKILLS}
        counterColor={vars.colorGreen}
        skillsArray={achievedSkills}
        borderColor={vars.colorBlack100}
      />
    </SkillsListContainer>
  );
};

export default DevelopSkillsList;
