import { Box, Typography, Grid, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import vars from '../../static/scss/export.module.scss';
import styles from './skillRow.module.scss';
import { getColor } from '../../utils/helpers/getColor';
import { MORE_INFO, LEVEL } from '../../utils/constants';
import { TextLinkButton } from '../buttons';

// skillRow elements
const SkillBox = styled(Box)((props) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  padding: '40px 24px',
  border: `1px solid ${props.borderColor || '#DDE0E4'}`,
  borderRadius: '6px',
  backgroundColor: '#FFF',
}));

const SkillTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '16px',
  lineHeight: '20px',
  letterSpacing: 0,
  maxWidth: '552px',
  width: '100%',
});

export const LevelsContainer = styled(Grid)({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
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

type TSkill = {
  id: number;
  name: string;
  currentLevel: number;
  targetLevel: number;
  levels: number;
};

interface SkillProps {
  borderColor?: string;
  skillsArray: TSkill[];
}

// renders a row with skill name, level progress bar, current level and target level
export const SkillRow: React.FC<SkillProps> = ({
  skillsArray,
  borderColor,
}) => {
  const shortLevel = LEVEL.toLowerCase().substring(0, 2) + '.';

  return (
    <div className={styles.skillRowList}>
      {skillsArray.map((skill) => (
        <div key={skill.id} className={styles.skillRow}>
          <SkillBox borderColor={borderColor}>
            <SkillTypography>{skill.name}</SkillTypography>
            <div className={styles.skillRow__levels}>
              <div className={styles.levelsContainer}>
                <LevelsContainer>
                  {Array.from({ length: skill.levels }).map((_, index) => (
                    <LevelGrid
                      key={index}
                      sx={{
                        backgroundColor: getColor(
                          index + 1,
                          skill.currentLevel,
                          skill.targetLevel,
                        ),
                      }}
                    />
                  ))}
                </LevelsContainer>
                <div className={styles.levelsText}>
                  {shortLevel} {skill.currentLevel}
                  {skill.currentLevel < skill.targetLevel && (
                    <>
                      <ArrowForwardIcon />
                      {shortLevel} {skill.targetLevel}
                    </>
                  )}
                </div>
              </div>
              <TextLinkButton>{MORE_INFO}</TextLinkButton>
            </div>
          </SkillBox>
        </div>
      ))}
    </div>
  );
};
