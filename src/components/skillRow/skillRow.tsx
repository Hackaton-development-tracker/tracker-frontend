import { useDispatch } from 'react-redux';
import { Box, Typography, styled } from '@mui/material';
import styles from './skillRow.module.scss';
import { MORE_INFO } from '../../utils/constants';
import { TextLinkButton } from '../buttons';
import { openPopup } from '../../services/redux/slices/popup/popup';
import { ISkill, LevelsGrid, LevelsArrow, shortLevel } from '../levelelements';

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
    <div className={styles.skills__container}>
      {skillsArray.map((skill) => (
        <div
          key={skill.id}
          className={styles.skills__row}
          onClick={() => handleOpenPopup(skill)}
        >
          <SkillBox borderColor={borderColor}>
            <SkillTypography>{skill.name}</SkillTypography>
            <div className={styles.skills__levels}>
              <div className={styles.skills__levels_container}>
                <LevelsGrid
                  skill={skill}
                  nextLevel={
                    skill.current_level < skill.target_level ? true : false
                  }
                />
                <LevelsArrow skill={skill} level={shortLevel} />
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
