import { Box, Typography, Avatar } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import {
  SkillBox,
  SkillTypography,
  LevelsGridContainer,
  LevelGrid,
} from './skillRowElements';
import { MORE_INFO, LEVEL } from '../../utils/constants';

type TSkill = {
  id: number;
  name: string;
  currentLevel: number;
  targetLevel: number;
  levels: number;
};

interface SkillProps {
  skillListHeader: string;
  borderColor?: string;
  counterColor?: string;
  skillsArray: TSkill[];
}

const SkillRow: React.FC<SkillProps> = ({
  skillListHeader,
  skillsArray,
  borderColor,
  counterColor,
}) => {
  const setColor = (
    index: number,
    currentLevel: number,
    targetLevel: number,
    levels: number,
  ) => {
    if (
      currentLevel < targetLevel &&
      targetLevel < levels &&
      index === targetLevel 
      ) {
      return '#1d6bf3';
    } else if (
      currentLevel > targetLevel ||
      index === currentLevel ||
      currentLevel > index
    ) {
      return '#87CC9E';
    } else {
      return '#E8E8E8';
    }
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          gap: '8px',
          paddingTop: '24px',
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
          sx={{ width: '24px', height: '24px', backgroundColor: counterColor }}
        >
          <SkillTypography sx={{ color: '#fff' }}>
            {skillsArray.length}
          </SkillTypography>
        </Avatar>
      </Box>
      {skillsArray.map((skill) => (
        <Box
          key={skill.id}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            paddingBottom: '8px',
          }}
        >
          <SkillBox borderColor={borderColor}>
            <SkillTypography
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
                  {Array.from({ length: skill.levels }).map((_, index) => (
                    <LevelGrid
                      key={index}
                      sx={{
                        backgroundColor: setColor(
                          index + 1,
                          skill.currentLevel,
                          skill.targetLevel,
                          skill.levels,
                        ),
                      }}
                    />
                  ))}
                </LevelsGridContainer>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}
                >
                  {LEVEL} {skill.currentLevel}
                  {skill.currentLevel < skill.targetLevel ? (
                    <>
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
                    </>
                  ) : (
                    ''
                  )}
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
        </Box>
      ))}
    </>
  );
};

export default SkillRow;
