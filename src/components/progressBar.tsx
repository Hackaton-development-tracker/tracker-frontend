import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import vars from '../static/scss/export.module.scss';
import {
  achievedSkills,
  skillsToImprove,
} from '../utils/backendData/data';

// progressBar elements
const ProgressBarContainer = styled(Box)({
  display: 'flex',
  gap: '2px',
  minWidth: '100px',
  width: '100%',
});

const AchievedProgress = styled(LinearProgress)({
  backgroundColor: vars.colorGreen,
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: vars.colorGreen,
  },
});

const RemainingProgress = styled(LinearProgress)({
  backgroundColor: vars.colorBlueMain,
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: vars.colorBlueMain,
  },
});

type ProgressBarProps = {
  progressValue: number;
  setProgressValue: React.Dispatch<React.SetStateAction<number>>;
};

// renders a progress bar component
const ProgressBar: React.FC<ProgressBarProps> = ({
  progressValue,
  setProgressValue,
}) => {
  const [remainingValue, setRemainingValue] = useState(0);

  // calculate total number of skills
  const totalSkillsNumber = achievedSkills.length + skillsToImprove.length;

  // update progress and remaining values
  useEffect(() => {
    setProgressValue((achievedSkills.length / totalSkillsNumber) * 100);
  }, [achievedSkills, totalSkillsNumber]);

  useEffect(() => {
    setRemainingValue((skillsToImprove.length / totalSkillsNumber) * 100);
  }, [skillsToImprove, totalSkillsNumber]);

  return (
    <>
      <ProgressBarContainer>
        <AchievedProgress
          variant="determinate"
          value={100}
          sx={{
            width: `${progressValue}%`,
          }}
        />
        <RemainingProgress
          value={100}
          sx={{
            width: `${remainingValue}%`,
          }}
        />
      </ProgressBarContainer>
      <div>
        {achievedSkills.length}/{totalSkillsNumber}
      </div>
    </>
  );
};

export default ProgressBar;
