import { Paper, styled } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import { SKILLS_TO_IMPROVE, ACHIEVED_SKILLS } from '../utils/constants';
import DevelopSkills from './developSkills/developSkills';
import { useAppSelector } from '../services/typeHooks';
import { skillsSelect } from '../services/redux/slices/skills/skills';

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
  const skills = useAppSelector(skillsSelect);
  // data from server
  const skillsToImprove = skills.skillsToImprove || [];
  const achievedSkills = skills.achievedSkills || [];
  
  // data from utils/backendTestData
  // const skillsToImprove: ISkill[] = skillsData[0].skillsToImprove || [];
  // const achievedSkills: ISkill[] = skillsData[1].achievedSkills || [];

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
