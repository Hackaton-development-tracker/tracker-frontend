import { useState } from 'react';
import {
  Button,
  Box,
  Paper,
  Collapse,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import {
  SHOW_ACHIEVED_SKILLS,
  ACHIEVED_SKILLS,
  SKILLS_TO_IMPROVE,
  COLLAPSE,
} from '../../utils/constants';
import Skill from '../skill/skill';
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
        <Skill skillListHeader={SKILLS_TO_IMPROVE} skillsArray={skillsToImprove} />
    
         <Collapse in={expanded}>
          <Skill skillListHeader={ACHIEVED_SKILLS} skillsArray={achievedSkills} />
          {/*
          <Box
            sx={{ display: 'flex', justifyContent: 'flex-start', gap: '8px' }}
          >
            <Typography
              sx={{
                fontFamily: 'YS Display Medium',
                fontSize: '20px',
                lineHeight: '24px',
                letterSpacing: 0,
              }}
            >
              {ACHIEVED_SKILLS}
            </Typography>
            <Avatar
              sx={{ width: '24px', height: '24px', backgroundColor: '#87CC9E' }}
            >
              <Typography variant="body1" sx={{ color: '#fff' }}>
                {achievedSkills.length}
              </Typography>
            </Avatar>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {achievedSkills.map((skill) => (
            <BoxS>
              <Typography variant="body1" key={skill.id}>
                {skill.name}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '32px',
                }}
              >
                <LevelsGridContainer>
                  <CurrentLevelGrid />
                  <CurrentLevelGrid />
                  <LevelGrid />
                </LevelsGridContainer>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {skill.currentLevel}
                </Box>
              </Box>
              <Typography
                sx={{
                  fontSize: '13px',
                  lineHeight: '16px',
                  letterSpacing: 0,
                }}
              >
                {MORE_INFO}
              </Typography>
            </BoxS>
          ))}
          </Box> */}
        </Collapse>
        <Button onClick={handleExpand} startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />} sx={{ marginTop: '24px' }}>{`${
          expanded ? COLLAPSE : SHOW_ACHIEVED_SKILLS
        }`}</Button>
      </Paper>
    </Box>
  );
};

export default SkillsList;
