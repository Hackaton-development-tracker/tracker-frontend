import { useState, useEffect } from 'react';
import { styled } from '@mui/material/styles';
import { Box, LinearProgress } from '@mui/material';
import {
  achievedSkills,
  skillsToImprove,
} from '../utils/backendData/skillsArrayBackend';

const AchievedProgress = styled(LinearProgress)({
  backgroundColor: '#87CC9E',
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#87CC9E',
  },
});

const RemainingProgress = styled(LinearProgress)({
  backgroundColor: '#1d6bf3',
  width: '100%',
  height: '12px',
  borderRadius: '12px',
  '& .MuiLinearProgress-bar': {
    backgroundColor: '#1d6bf3',
  },
});

type ProgressBarProps = {
  progressValue: number;
  setProgressValue: React.Dispatch<React.SetStateAction<number>>;
};

const ProgressBar: React.FC<ProgressBarProps> = ({
  progressValue,
  setProgressValue,
}) => {
  const [remainingValue, setRemainingValue] = useState(0);

  // calculate total number of skills
  const totalSkillsNumber = achievedSkills.length + skillsToImprove.length;

  // update progress and remaining values
  const updateProgress = () => {
    setProgressValue((achievedSkills.length / totalSkillsNumber) * 100);
    setRemainingValue((skillsToImprove.length / totalSkillsNumber) * 100);
  };

  useEffect(() => {
    updateProgress();
  }, [achievedSkills, skillsToImprove]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '2px',
          minWidth: '100px',
          width: '100%',
        }}
      >
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
      </Box>
      <div>
        {achievedSkills.length}/{totalSkillsNumber}
      </div>
    </>
  );
};

export default ProgressBar;
