import { useState } from 'react';
import { Box, Collapse, Typography, ListItem, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import vars from '../../static/scss/export.module.scss';
import Counter from '../counter';
import styles from './developSkills.module.scss';
import { TSkill, LevelsGrid } from '../levelelements';
import {
  LEVEL,
  COLLAPSE,
  SKILL_DESCRIPTION,
  SKILLS_TO_IMPROVE,
} from '../../utils/constants';
import { TextExpandButton } from '../buttons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tag from '../tag';

type SkillProps = {
  skillNumber: number;
  header: string;
  skillsToImprove?: boolean;
  counterColor: string;
  skillsArray: TSkill[];
  borderColor?: string;
};

// skillRow elements
const SkillBox = styled(Box)((props) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '16px',
  border: `1px solid ${props.borderColor || '#DDE0E4'}`,
  borderRadius: '6px',
  backgroundColor: '#FFF',
}));

const HeaderBox = styled(Box)({
  display: 'flex',
  justifyContent: 'flex-start',
  gap: '8px',
  paddingTop: '24px',
});

const HeaderTypography = styled(Typography)({
  fontFamily: 'YS Display Medium',
  fontSize: '20px',
  lineHeight: '24px',
  letterSpacing: 0,
});

const LevelTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

type ExpandedStates = {
  [key: number]: boolean;
};

export const DevelopSkills: React.FC<SkillProps> = ({
  skillNumber,
  header,
  skillsToImprove,
  counterColor,
  skillsArray,
  borderColor,
}) => {
  const [expandedStates, setExpandedStates] = useState<ExpandedStates>({});

  const handleExpandClick = (skillId: number) => {
    setExpandedStates((prevExpandedStates) => ({
      ...prevExpandedStates,
      [skillId]: !prevExpandedStates[skillId],
    }));
  };

  // renders level with progress bar and description
  const LevelBox = ({ skill, level, grade }: { skill: TSkill; level: number, grade: string }) => (
    <div className={styles.levelBox}>
      <div className={styles.levelHeader}>
        <LevelTypography>
          {LEVEL} {level}
        </LevelTypography>
        <LevelsGrid skill={skill} />
        <Tag text={grade} color="#fff" radius="100px" border='1px solid #DDE0E4' />
      </div>
      {Object.keys(skill.levels_description)
        .filter((key) => parseInt(key) === level)
        .map((key) => (
          <ListItem key={key}>{skill.levels_description[key]}</ListItem>
        ))}
    </div>
  );

  return (
    <div className={styles.skillList}>
      <HeaderBox>
        <HeaderTypography>{header}</HeaderTypography>
        <Counter number={skillsArray.length} color={counterColor} />
      </HeaderBox>
      {skillsArray.map((skill) => (
        <div key={skill.id}>
          <SkillBox borderColor={borderColor}>
            <div className={styles.skillHeader}>
              <HeaderTypography>{`${skillNumber++}.`} {skill.name}</HeaderTypography>
              {skillsToImprove && (
                <Tag
                  text={SKILLS_TO_IMPROVE}
                  color="#5A9BFF33"
                  radius="100px"
                />
              )}
            </div>

            <Collapse
              in={expandedStates[skill.id] || false}
              sx={{ paddingTop: '12px' }}
            >
              {skill.description}
            </Collapse>
            <TextExpandButton
              sx={{
                paddingBottom: '12px',
                maxWidth: '266px',
                alignSelf: 'start',
              }}
              onClick={() => handleExpandClick(skill.id)}
              startIcon={
                expandedStates[skill.id] ? (
                  <ExpandLessIcon />
                ) : (
                  <ExpandMoreIcon />
                )
              }
            >
              {`${expandedStates[skill.id] ? COLLAPSE : SKILL_DESCRIPTION}`}
            </TextExpandButton>

            <div className={styles.skillInfo}>
              <LevelBox skill={skill} level={skill.current_level} grade={skill.current_level_grade}/>
              <ArrowForwardIosIcon
                sx={{
                  marginTop: '16px',
                  width: '24px',
                  height: '24px',
                  color: `${
                    header === SKILLS_TO_IMPROVE
                      ? vars.colorBlue
                      : vars.colorBlack300
                  }`,
                }}
              />
              <LevelBox
                skill={skill}
                level={skill.next_level ? skill.next_level : skill.target_level}
                grade={skill.next_level_grade ? skill.next_level_grade : skill.target_level_grade}
              />
            </div>
          </SkillBox>
        </div>
      ))}
    </div>
  );
};

export default DevelopSkills;
