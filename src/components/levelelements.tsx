import { styled } from '@mui/material/styles';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Grid, Typography } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import { LEVEL } from '../utils/constants';
import { getColor } from '../utils/helpers/getColor';

export type TSkill = {
  id: number;
  name: string;
  current_level: number;
  target_level: number;
  total_levels: number;
  description: string;
  levels_description: {
    [key: string]: string;
  };
};

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
    lineHeight: '20px'
})

export const LevelsGrid = ({ skill }: { skill: TSkill }) => (
  <LevelsContainer>
    {Array.from({ length: skill.total_levels }).map((_, index) => (
      <LevelGrid
        key={index}
        sx={{
          backgroundColor: getColor(
            index + 1,
            skill.current_level,
            skill.target_level,
          ),
        }}
      />
    ))}
  </LevelsContainer>
);

export const LevelsArrow = ({
  skill,
  level,
}: {
  skill: TSkill;
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