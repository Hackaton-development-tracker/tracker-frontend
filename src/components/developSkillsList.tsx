import { Paper, styled } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import { TSkill } from './levelelements';
import { SKILLS_TO_IMPROVE, ACHIEVED_SKILLS } from '../utils/constants';

import skillsData from '../utils/backendData/skills.json';
import DevelopSkillList from './developSkills/developSkills';

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
  const skillNumber = 1;
  const skillsToImprove: TSkill[] = skillsData[0].skillsToImprove || [];
  const achievedSkills: TSkill[] = skillsData[1].achievedSkills || [];

  return (
    <SkillsListContainer elevation={0}>
      <DevelopSkillList
        skillNumber={skillNumber}
        header={SKILLS_TO_IMPROVE}
        skillsToImprove
        counterColor={vars.colorBlueMain}
        skillsArray={skillsToImprove}
        borderColor={vars.colorBlueMain}
      />
      <DevelopSkillList
        skillNumber={skillNumber}
        header={ACHIEVED_SKILLS}
        counterColor={vars.colorGreen}
        skillsArray={achievedSkills}
        borderColor={vars.colorBlack100}
      />
    </SkillsListContainer>
  );
};

export default DevelopSkillsList;
