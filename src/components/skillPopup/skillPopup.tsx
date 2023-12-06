import React from 'react';
import Popup from '../popup/popup';
import styles from './skillPopup.module.scss';

type SkillPopupProps = {
  title: string;
  levelsGrid: React.ReactNode;
  levelsArrow: React.ReactNode;
  description: string;
  levels_description: {
    [key: string]: string;
  };
}

const SkillPopup: React.FC<SkillPopupProps> = ({
  title,
  levelsGrid,
  levelsArrow,
  description,
  levels_description,
}) => {
  return (
    <Popup popupId="skillPopup">
      <div className={styles.content}>
        <h2 className={styles.leveltitle}>{title}</h2>
        <div className={styles.levels}>
          <div>{levelsGrid}</div>
          <div>{levelsArrow}</div>
        </div>
        <p>{description}</p>
        <div>
        {Object.keys(levels_description).map((key) => (
            <div key={key}>{levels_description[key]}</div>
          ))}
        </div>
      </div>
    </Popup>
  );
};

export default SkillPopup;
