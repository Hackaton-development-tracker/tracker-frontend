import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../services/redux/store';
import { Box, Paper, Collapse, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import vars from '../static/scss/export.module.scss';
import {
  EXPAND_ACHIEVED_SKILLS,
  ACHIEVED_SKILLS,
  SKILLS_TO_IMPROVE,
  COLLAPSE,
} from '../utils/constants';
import { SecondaryButton } from './buttons';
import { SkillRow } from './skillRow/skillRow';
import SkillPopup from './skillPopup/skillPopup';
import skillsData from '../utils/backendData/skills.json';
import Counter from './counter';
import { ISkill, LevelsGrid, LevelsArrow, shortLevel } from './levelelements';

// skillList elements
const SkillsListContainer = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  padding: '24px',
  paddingTop: 0,
  borderRadius: '8px',
  backgroundColor: '#F9FAFB',
});

const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '8px',
  paddingTop: '24px',
  paddingBottom: '24px',
});

const HeaderTypography = styled(Typography)({
  fontFamily: 'YS Display Medium',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

// renders a list of skills with an expand and collapse buttons
const SkillsList = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<ISkill | null>(null);
  const isSkillPopupOpen = useSelector((state: RootState) => state.popup);

  // toggles the expanded state
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const skillsToImprove: ISkill[] = skillsData[0].skillsToImprove || [];
  const achievedSkills: ISkill[] = skillsData[1].achievedSkills || [];

  return (
    <Box>
      <SkillsListContainer elevation={0}>
        <HeaderBox>
          <HeaderTypography>{SKILLS_TO_IMPROVE}</HeaderTypography>
          <Counter number={skillsToImprove.length} color={vars.colorBlueMain} />
        </HeaderBox>
        <SkillRow
          setSelectedSkill={setSelectedSkill}
          skillsArray={skillsToImprove}
          borderColor={vars.colorBlueMain}
        />
        <Collapse in={expanded}>
          <HeaderBox sx={{ paddingTop: '48px' }}>
            <HeaderTypography>{ACHIEVED_SKILLS}</HeaderTypography>
            <Counter number={achievedSkills.length} color={vars.colorGreen} />
          </HeaderBox>
          <SkillRow
            setSelectedSkill={setSelectedSkill}
            skillsArray={achievedSkills}
            borderColor={vars.colorBlack100}
          />
        </Collapse>
        <SecondaryButton
          sx={{
            maxWidth: '266px',
            marginTop: '24px',
            alignSelf: 'center',
          }}
          onClick={handleExpand}
          startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {`${expanded ? COLLAPSE : EXPAND_ACHIEVED_SKILLS}`}
        </SecondaryButton>
      </SkillsListContainer>
      {isSkillPopupOpen && selectedSkill && (
        <SkillPopup
          title={selectedSkill.name}
          levelsGrid={
            <LevelsGrid
              skill={selectedSkill}
              nextLevel={
                selectedSkill.current_level < selectedSkill.target_level
                  ? true
                  : false
              }
            />
          }
          levelsArrow={<LevelsArrow skill={selectedSkill} level={shortLevel} />}
          description={selectedSkill.description}
          levels_description={selectedSkill.levels_description || {}}
        />
      )}
    </Box>
  );
};

export default SkillsList;
