import { useState } from 'react';
import { Box, Paper, Collapse, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import vars from '../static/scss/export.module.scss';
import {
  SHOW_ACHIEVED_SKILLS,
  ACHIEVED_SKILLS,
  SKILLS_TO_IMPROVE,
  COLLAPSE,
} from '../utils/constants';
import { SecondaryButton } from './buttons';
import { SkillRow } from './skillRow/skillRow';
import {
  skillsToImprove,
  achievedSkills,
} from '../utils/backendData/data';
import Counter from './counter';

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

  // toggles the expanded state
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <SkillsListContainer elevation={0}>
        <HeaderBox>
          <HeaderTypography>{SKILLS_TO_IMPROVE}</HeaderTypography>
          <Counter number={skillsToImprove.length} color={vars.colorBlueMain} />
        </HeaderBox>
        <SkillRow
          skillsArray={skillsToImprove}
          borderColor={vars.colorBlueMain}
        />
        <Collapse in={expanded}>
          <HeaderBox sx={{ paddingTop: '48px' }}>
            <HeaderTypography>{ACHIEVED_SKILLS}</HeaderTypography>
            <Counter number={achievedSkills.length} color={vars.colorGreen} />
          </HeaderBox>
          <SkillRow
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
          {`${expanded ? COLLAPSE : SHOW_ACHIEVED_SKILLS}`}
        </SecondaryButton>
      </SkillsListContainer>
    </Box>
  );
};

export default SkillsList;
