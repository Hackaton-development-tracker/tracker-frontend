import { useState } from 'react';
import { Box, Collapse, ListItem, styled } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import vars from '../../static/scss/export.module.scss';
import Counter from '../counter';
import styles from './developSkills.module.scss';
import { ISkill, LevelsGrid } from '../levelelements';
import {
  LEVEL,
  COLLAPSE,
  SKILL_DESCRIPTION,
  SKILLS_TO_IMPROVE,
} from '../../utils/constants';
import { TitleTypography, TextTypography } from '../cardelements';
import { TextExpandButton } from '../buttons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import Tag from '../tag';

type DevelopSkillProps = {
  header: string;
  skillsToImprove?: boolean;
  counterColor: string;
  skillsArray: ISkill[];
  borderColor?: string;
};

// developSkill elements
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


export const DevelopSkills: React.FC<DevelopSkillProps> = ({
  header,
  skillsToImprove,
  counterColor,
  skillsArray,
  borderColor,
}) => {
  type ExpandedStates = {
    [key: number]: boolean;
  };
  const [expandedStates, setExpandedStates] = useState<ExpandedStates>({});

  const handleExpandClick = (skillId: number) => {
    setExpandedStates((prevExpandedStates) => ({
      ...prevExpandedStates,
      [skillId]: !prevExpandedStates[skillId],
    }));
  };

  // renders level with progress bar and description
  const LevelBox = ({
    skill,
    level,
    grade,
  }: {
    skill: ISkill;
    level: number;
    grade: string;
  }) => (
    <div className={styles.levelBox}>
      <div className={styles.levelHeader}>
        <TextTypography>
          {LEVEL} {level}
        </TextTypography>
        <LevelsGrid
          skill={skill}
          nextLevel={
            level < skill.target_level ||
            (skill.next_level && level < skill.next_level)
              ? false
              : true
          }
        />
        <Tag
          text={grade}
          color="#fff"
          radius="100px"
          border="1px solid #DDE0E4"
        />
      </div>
      {Object.keys(skill.levels_description)
        .filter((key) => parseInt(key) === level)
        .map((key) => (
          <ListItem key={key}>
            <TextTypography>{skill.levels_description[key]}</TextTypography>
          </ListItem>
        ))}
    </div>
  );

  return (
    <div className={styles.skillList}>
      <HeaderBox>
        <TitleTypography>{header}</TitleTypography>
        <Counter number={skillsArray.length} color={counterColor} />
      </HeaderBox>
      {skillsArray.map((skill) => (
        <div key={skill.id}>
          <SkillBox borderColor={borderColor}>
            <div className={styles.skillHeader}>
              <TitleTypography>{skill.name}</TitleTypography>

              {/* blue color tag */}
              {skillsToImprove && (
                <Tag
                  text={SKILLS_TO_IMPROVE}
                  color="#5A9BFF33"
                  radius="100px"
                />
              )}
            </div>

            {/* expand and collapse button */}
            <Collapse
              in={expandedStates[skill.id] || false}
              sx={{ paddingTop: '12px' }}
            >
              <TextTypography>{skill.description}</TextTypography>
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

            {/* renders left and right level colums with arrow */}
            <div className={styles.skillInfo}>
              <LevelBox
                skill={skill}
                level={skill.current_level}
                grade={skill.current_level_grade}
              />
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
                grade={
                  skill.next_level_grade
                    ? skill.next_level_grade
                    : skill.target_level_grade
                }
              />
            </div>
          </SkillBox>
        </div>
      ))}
    </div>
  );
};

export default DevelopSkills;
