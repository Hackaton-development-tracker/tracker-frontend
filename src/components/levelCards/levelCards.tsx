import { useState, useEffect } from 'react';
import { Box } from '@mui/material';

import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_NEXT_LEVEL,
  USER_NEXT_LEVEL_ACHIEVED,
  TEST_RETAKE_DAYS,
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

function LevelCards() {
  // TODO: backend - get data
  const USER_TITLE_MOCK = 'Продакт-менеджер';
  const USER_CURRENT_LEVEL_MOCK = 'Джуниор+';
  const TEST_DATE_MOCK = '25 октября 2023';
  const USER_NEXT_LEVEL_MOCK = 'Мидл';
  const TEST_RETAKE_DAYS_MOCK = '14 дней';

  // TODO: backend - get number of achieved and remaining skills
  const numberOfAchievedSkills = 7;
  const numberOfRemainingSkills = 3;
  const totalSkillsNumber = numberOfAchievedSkills + numberOfRemainingSkills;

  const [progressValue, setProgressValue] = useState(0);
  const [remainingValue, setRemainingValue] = useState(0);

  const updateProgress = () => {
    setProgressValue((numberOfAchievedSkills / totalSkillsNumber) * 100);
    setRemainingValue((numberOfRemainingSkills / totalSkillsNumber) * 100);
  };

  useEffect(() => {
    updateProgress();
  }, [numberOfAchievedSkills, numberOfRemainingSkills]);

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
              {USER_TITLE_MOCK}
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
              {USER_CURRENT_LEVEL} на {TEST_DATE_MOCK}
            </CardTypography>
            <CardTypography
              sx={{
                fontSize: '24px',
                lineHeight: '32px',
              }}
            >
              {USER_CURRENT_LEVEL_MOCK}
            </CardTypography>
          </div>
          <MainButton>{OPEN_MAP}</MainButton>
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
              {USER_NEXT_LEVEL_MOCK}
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
            maxWidth: '560px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '2px',
              minWidth: '510px',
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
            {numberOfAchievedSkills}/{totalSkillsNumber}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <CardTypography
            sx={{
              paddingRight: '4px',
            }}
          >
            {TEST_RETAKE_DAYS}
          </CardTypography>
          <CardTypography
            sx={{
              fontFamily: 'YS Text Medium',
            }}
          >
            {TEST_RETAKE_DAYS_MOCK}
          </CardTypography>
          <ActionButton
            disabled
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
