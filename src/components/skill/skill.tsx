import { Box, Typography, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  SkillBox,
  SkillTypography,
  LevelsGridContainer,
  CurrentLevelGrid,
  NextLevelGrid,
  LevelGrid,
} from '../skillsList/skillsListElements';
import { MORE_INFO, LEVEL } from '../../utils/constants';

type TSkill = {
  id: number;
  name: string;
  currentLevel: string;
  targetLevel: string;
  levels: string;
};

interface SkillProps {
  skillListHeader: string;
  skillsArray: TSkill[];
}

const Skill: React.FC<SkillProps> = ({ skillListHeader, skillsArray }) => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '8px',
          paddingTop: '48px',
          paddingBottom: '24px',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'YS Display Medium',
            fontSize: '20px',
            lineHeight: '24px',
            letterSpacing: 0,
          }}
        >
          {skillListHeader}
        </Typography>
        <Avatar
          sx={{ width: '24px', height: '24px', backgroundColor: '#1d6bf3' }}
        >
          <SkillTypography sx={{ color: '#fff' }}>
            {skillsArray.length}
          </SkillTypography>
        </Avatar>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {skillsArray.map((skill) => (
          <SkillBox borderColor={'#1D6BF3'}>
            <SkillTypography
              key={skill.id}
              sx={{
                maxWidth: '552px',
                width: '100%',
              }}
            >
              {skill.name}
            </SkillTypography>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '100%',
              }}
            >
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
                  <NextLevelGrid />
                  <LevelGrid />
                </LevelsGridContainer>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {LEVEL} {skill.currentLevel}
                  <ArrowForwardIosIcon
                    sx={{
                      color: '#1D6BF3',
                      width: '14px',
                      height: '14px',
                      paddingLeft: '8px',
                      paddingRight: '8px',
                    }}
                  />
                  {LEVEL} {skill.targetLevel}
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
            </Box>
          </SkillBox>
        ))}
      </Box>
    </>
  );
};

export default Skill;
