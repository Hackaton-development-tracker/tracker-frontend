import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Typography } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import { LEVEL } from '../utils/constants';
import {
  getCurrentLevelColor,
  getNextLevelColor,
} from '../utils/helpers/getLevelColor';
import { ISkill } from '../services/redux/slices/skills/skills';

export const shortLevel = LEVEL.toLowerCase().substring(0, 2) + '.';

export const LevelsContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'flex-start',
  padding: 0,
  gap: '4px',
});

export const LevelGrid = styled(Grid)({
  height: '14px',
  width: '6px',
  borderRadius: '6px',
});

export const ArrowForwardIcon = styled(ArrowForwardIosIcon)({
  color: vars.colorBlueMain,
  width: '14px',
  height: '14px',
  paddingLeft: '8px',
  paddingRight: '8px',
});

export const LevelText = styled(Typography)({
  display: 'flex',
  alignItems: 'center',
  fontFamily: 'YS Text Regular',
  fontSize: '14px',
  lineHeight: '20px',
});

// renders visual representation of skill levels, sets colors depending on current level
export const LevelsGrid = ({
  skill,
  nextLevel,
}: {
  skill: ISkill;
  nextLevel?: boolean;
}) => (
  <LevelsContainer>
    {Array.from({ length: skill.total_levels }).map((_, index) => (
      <LevelGrid
        key={index}
        sx={{
          backgroundColor: nextLevel
            ? getNextLevelColor(
                index + 1,
                skill.current_level,
                skill.target_level,
              )
            : getCurrentLevelColor(index + 1, skill.current_level),
        }}
      />
    ))}
  </LevelsContainer>
);

// renders two text elements with current and target level and arrow between them
export const LevelsArrow = ({
  skill,
  level,
}: {
  skill: ISkill;
  level: string;
}) => (
  <LevelText>
    {level} {skill.current_level}
    {skill.current_level < skill.target_level && (
      <>
        <ArrowForwardIcon />
        {level} {skill.target_level}
      </>
    )}
  </LevelText>
);
