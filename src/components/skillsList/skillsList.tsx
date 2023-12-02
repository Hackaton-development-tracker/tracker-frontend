import { useState } from 'react';
import { Box, Paper, Collapse } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  SHOW_ACHIEVED_SKILLS,
  ACHIEVED_SKILLS,
  SKILLS_TO_IMPROVE,
  COLLAPSE,
} from '../../utils/constants';
import { ExpandButton } from '../buttons';
import SkillRow from '../skillRow/skillRow';
import {
  skillsToImprove,
  achievedSkills,
} from '../../utils/backendData/skillsArrayBackend';

const SkillsList = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <Box>
      <Paper
        elevation={0}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          padding: '24px',
          paddingTop: '0',
          borderRadius: '8px',
          backgroundColor: '#F9FAFB',
        }}
      >
        <SkillRow
          skillListHeader={SKILLS_TO_IMPROVE}
          skillsArray={skillsToImprove}
          borderColor="#1d6bf3"
          counterColor="#1d6bf3"
        />
        <Collapse in={expanded}>
          <SkillRow
            skillListHeader={ACHIEVED_SKILLS}
            skillsArray={achievedSkills}
            borderColor="#DDE0E4"
            counterColor="#87CC9E"
          />
        </Collapse>
        <ExpandButton
          onClick={handleExpand}
          startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >{`${expanded ? COLLAPSE : SHOW_ACHIEVED_SKILLS}`}</ExpandButton>
      </Paper>
    </Box>
  );
};

export default SkillsList;
