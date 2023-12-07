import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import { Box, Paper, Grid, Collapse, Typography, styled } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import vars from '../../static/scss/export.module.scss';
import styles from './skillList.module.scss';
import { getColor } from '../../utils/helpers/getColor';
import { LEVEL } from '../../utils/constants';
import {
  EXPAND_ACHIEVED_SKILLS,
  ACHIEVED_SKILLS,
  SKILLS_TO_IMPROVE,
  COLLAPSE,
} from '../../utils/constants';
import { SecondaryButton } from '../buttons';
import { SkillRow } from '../skillRow/skillRow';
import SkillPopup from '../skillPopup/skillPopup';
import skillsData from './skills.json';
import Counter from '../counter';

type TSkill = {
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

export const shortLevel = LEVEL.toLowerCase().substring(0, 2) + '.';

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
  <div className={styles.text}>
    {level} {skill.current_level}
    {skill.current_level < skill.target_level && (
      <>
        <ArrowForwardIcon />
        {level} {skill.target_level}
      </>
    )}
  </div>
);

// renders a list of skills with an expand and collapse buttons
const SkillsList = () => {
  const [expanded, setExpanded] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState<TSkill | null>(null);
  const isSkillPopupOpen = useSelector((state: RootState) => state.popup);

  // toggles the expanded state
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  const skillsToImprove: TSkill[] = skillsData[0].skillsToImprove || [];
  const achievedSkills: TSkill[] = skillsData[1].achievedSkills || [];

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
          levelsGrid={<LevelsGrid skill={selectedSkill} />}
          levelsArrow={<LevelsArrow skill={selectedSkill} level={shortLevel} />}
          description={selectedSkill.description}
          levels_description={selectedSkill.levels_description || {}}
        />
      )}
    </Box>
  );
};

export default SkillsList;
