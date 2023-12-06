import { useDispatch } from 'react-redux';
import { Box, Typography, styled } from '@mui/material';
import styles from './skillRow.module.scss';
import { MORE_INFO } from '../../utils/constants';
import { TextLinkButton } from '../buttons';
import { openPopup } from '../../services/redux/slices/popup/popup';
import { LevelsGrid, LevelsArrow, shortLevel } from '../skillList/skillsList';

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

type SkillProps = {
  setSelectedSkill: (skill: TSkill) => void;
  skillsArray: TSkill[];
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
  const handleOpenPopup = (skill: TSkill) => {
    dispatch(openPopup('skillPopup'));
    setSelectedSkill(skill);
  };

  return (
    <div className={styles.skilllist}>
      {skillsArray.map((skill) => (
        <div
          key={skill.id}
          className={styles.skillrow}
          onClick={() => handleOpenPopup(skill)}
        >
          <SkillBox borderColor={borderColor}>
            <SkillTypography>{skill.name}</SkillTypography>
            <div className={styles.levels}>
              <div className={styles.container}>
                <LevelsGrid skill={skill} />
                <LevelsArrow skill={skill} level={shortLevel} />
              </div>
              <TextLinkButton className={styles.button}>
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