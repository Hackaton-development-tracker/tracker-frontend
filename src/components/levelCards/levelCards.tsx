import { useState, useEffect } from 'react';
import { format, parseISO } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { Box, Link } from '@mui/material';

import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_NEXT_LEVEL,
  USER_NEXT_LEVEL_ACHIEVED,
  USER_CURRENT_LEVEL_ACHIEVED,
  RETAKE_TEST,
  CHANGE,
  OPEN_MAP,
} from '../../utils/constants';
import {
  CardPaper,
  CardTypography,
  AchievedLinearProgress,
  RemainingLinearProgress,
} from './levelCardsElements';
import { CustomButton, MainButton, ActionButton } from '../buttons';
import CountdownTimer from '../countdownTimer/countdownTimer';
import {
  achievedSkills,
  skillsToImprove,
} from '../../utils/backendData/skillsArrayBackend';
import {
  userTitle,
  userCurrentLevel,
  testDate,
  nextTestDate,
  userNextLevel,
} from '../../utils/backendData/constantsBackend';

function LevelCards() {
  const [progressValue, setProgressValue] = useState(0);
  const [remainingValue, setRemainingValue] = useState(0);
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);

  const formattedTestDate = format(parseISO(testDate), 'dd MMMM yyyy', {
    locale: ruLocale,
  });

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
    <Box
      sx={{
        display: 'flex',
        gap: '16px',
      }}
    >
      <CardPaper elevation={0}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }}
          >
            <CardTypography>{USER_TITLE}</CardTypography>
            <CardTypography
              sx={{
                fontFamily: 'YS Text Medium',
                fontSize: '18px',
                lineHeight: '24px',
              }}
            >
              {userTitle}
            </CardTypography>
          </Box>
          <CustomButton
            sx={{
              alignSelf: 'flex-start',
            }}
          >
            {CHANGE}
          </CustomButton>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div>
            <CardTypography>
              {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED}{' '}
              {formattedTestDate}
            </CardTypography>
            <CardTypography
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              {userCurrentLevel}
            </CardTypography>
          </div>
          <Link
            href="/map"
            sx={{
              textDecoration: 'none',
            }}
          >
            <MainButton>{OPEN_MAP}</MainButton>
          </Link>
        </Box>
      </CardPaper>
      <CardPaper elevation={0}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <CardTypography>{USER_NEXT_LEVEL}</CardTypography>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'baseline',
            }}
          >
            <CardTypography
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
                color: '#1D6BF3',
              }}
            >
              {userNextLevel}
            </CardTypography>
            <CardTypography
              sx={{
                fontSize: '14px',
                lineHeight: '20px',
                paddingRight: '4px',
                paddingLeft: '8px',
              }}
            >
              {USER_NEXT_LEVEL_ACHIEVED}
            </CardTypography>
            <CardTypography
              sx={{
                fontSize: '16px',
                lineHeight: '20px',
                color: '#1D6BF3',
              }}
            >
              {progressValue}&#37;
            </CardTypography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            width: '100%',
            alignItems: 'center',
            gap: '16px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '2px',
              minWidth: '100px',
              width: '100%',
            }}
          >
            <AchievedLinearProgress
              variant="determinate"
              value={100}
              sx={{
                width: `${progressValue}%`,
              }}
            />
            <RemainingLinearProgress
              value={100}
              sx={{
                width: `${remainingValue}%`,
              }}
            />
          </Box>
          <Box>
            {achievedSkills.length}/{totalSkillsNumber}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <CountdownTimer
            nextTestDate={nextTestDate}
            timeRemaining={timeRemaining}
            setTimeRemaining={setTimeRemaining}
          />
          <ActionButton
            disabled={(timeRemaining as number) > 0}
            sx={{
              marginLeft: '16px',
            }}
          >
            {RETAKE_TEST}
          </ActionButton>
        </Box>
      </CardPaper>
    </Box>
  );
}

export default LevelCards;
