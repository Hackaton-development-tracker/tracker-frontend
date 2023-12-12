import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../services/redux/store';
import Popup from '../popup/popup';
import styles from './skillPopup.module.scss';
import { Collapse, Typography, styled } from '@mui/material';
import { TextTypography } from '../cardelements';
import { TextExpandButton } from '../buttons';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { EXPAND_LEVELS, COLLAPSE, LEVEL } from '../../utils/constants';

type SkillPopupProps = {
  title: string;
  levelsGrid: React.ReactNode;
  levelsArrow: React.ReactNode;
  description: string;
  levels_description: {
    [key: string]: string;
  };
};

const TitleTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '24px',
  lineHeight: '32px',
});

const LevelTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

// reners popup when skill is clicked
const SkillPopup: React.FC<SkillPopupProps> = ({
  title,
  levelsGrid,
  levelsArrow,
  description,
  levels_description,
}) => {
  const [expanded, setExpanded] = useState(false);
  const isSkillPopupOpen = useSelector((state: RootState) => state.popup);

  useEffect(() => {
    setExpanded(false);
  }, [isSkillPopupOpen]);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  return (
    <Popup popupId="skillPopup">
      <div className={styles.skillsPopupContent}>
        <TitleTypography className={styles.skillsPopupLevelTitle}>
          {title}
        </TitleTypography>
        <div className={styles.skillsPopupLevel}>
          <div>{levelsGrid}</div>
          <div>{levelsArrow}</div>
        </div>
        <TextTypography className={styles.skillsPopupDescription}>
          {description}
        </TextTypography>

        {/* expanded levels description */}
        <div className={styles.skillsPopupExpand}>
          <Collapse in={expanded}>
            <div className={styles.skillsPopupLevelBlock}>
              {Object.keys(levels_description).map((key) => (
                <div key={key}>
                  <LevelTypography className={styles.skillsPopupLevelTitle}>
                    {LEVEL} {key}
                  </LevelTypography>
                  <TextTypography>{levels_description[key]}</TextTypography>
                </div>
              ))}
            </div>
          </Collapse>
        </div>
        <TextExpandButton
          sx={{
            maxWidth: '266px',
            marginTop: '8px',
            alignSelf: 'start',
          }}
          onClick={handleExpandClick}
          startIcon={expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        >
          {`${expanded ? COLLAPSE : EXPAND_LEVELS}`}
        </TextExpandButton>
      </div>
    </Popup>
  );
};

export default SkillPopup;
