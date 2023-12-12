import { useDispatch } from 'react-redux';
import { Box, Typography, styled } from '@mui/material';
import styles from './skillRow.module.scss';
import { MORE_INFO } from '../../utils/constants';
import { TextLinkButton } from '../buttons';
import { openPopup } from '../../services/redux/slices/popup/popup';
import { LevelsGrid, LevelsArrow, shortLevel } from '../levelelements';
import { ISkill } from '../../services/redux/slices/skills/skills';

type SkillProps = {
  setSelectedSkill: (skill: ISkill) => void;
  skillsArray: ISkill[];
  borderColor?: string;
};

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

// renders a row with skill name, level progress bar, current level and target level
export const SkillRow: React.FC<SkillProps> = ({
  setSelectedSkill,
  skillsArray,
  borderColor,
}) => {
  const dispatch = useDispatch();
  const handleOpenPopup = (skill: ISkill) => {
    dispatch(openPopup('skillPopup'));
    setSelectedSkill(skill);
  };

  return (
    <div className={styles.skillsContainer}>
      {skillsArray.map((skillItem) => (
        <div
          key={skillItem.id}
          className={styles.skillsRow}
          onClick={() => handleOpenPopup(skillItem)}
        >
          <SkillBox borderColor={borderColor}>
            <SkillTypography>{skillItem.skill.title}</SkillTypography>
            <div className={styles.skillsLevels}>
              <div className={styles.skillsLevelsContainer}>
                <LevelsGrid
                  skill={skillItem}
                  nextLevel={
                    skillItem.current_level < skillItem.target_level ? true : false
                  }
                />
                <LevelsArrow skill={skillItem} level={shortLevel} />
              </div>
              <TextLinkButton className={styles.morebutton}>
                {MORE_INFO}
              </TextLinkButton>
            </div>
          </SkillBox>
        </div>
      ))}
    </div>
  );
};

export default SkillRow;
