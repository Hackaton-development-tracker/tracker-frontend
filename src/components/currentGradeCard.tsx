/* eslint-disable @typescript-eslint/naming-convention */
import { format, parseISO } from 'date-fns';
import ruLocale from 'date-fns/locale/ru';
import { Link, Typography, styled } from '@mui/material';
import {
  USER_TITLE,
  USER_CURRENT_LEVEL,
  USER_CURRENT_LEVEL_ACHIEVED,
  CHANGE,
  OPEN_MAP,
} from '../utils/constants';
import { Card } from './card/card';
import { TextButton, SecondaryButton } from './buttons';
import { user } from '../utils/backendData/data';

// grade cards fonts
const SmallTextTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
});

const ProfessionTypography = styled(Typography)({
  fontFamily: 'YS Text Medium',
  fontSize: '18px',
  lineHeight: '24px',
  paddingTop: '8px',
});

const GradeTypography = styled(Typography)({
  fontSize: '24px',
  lineHeight: '32px',
  letterSpacing: 0,
});

//  renders two cards, first shows information about the user's current level, second shows progress towards the next level
function CurrentGradeCard() {
  const { title, test_date, grade_current } = user[0];

  const formattedTestDate = format(parseISO(test_date), 'dd MMMM yyyy', {
    locale: ruLocale,
  });

  const currentTitle = (
    <>
      <div>
        <SmallTextTypography> {USER_TITLE}</SmallTextTypography>
        <ProfessionTypography>{title}</ProfessionTypography>
      </div>
      <TextButton
        sx={{
          alignSelf: 'flex-start',
        }}
      >
        {CHANGE}
      </TextButton>
    </>
  );

  const currentContent = (
    <>
      <div>
        <SmallTextTypography>
          {USER_CURRENT_LEVEL} {USER_CURRENT_LEVEL_ACHIEVED} {formattedTestDate}
        </SmallTextTypography>
        <GradeTypography>{grade_current}</GradeTypography>
      </div>
      <Link
        href="/map"
        sx={{
          textDecoration: 'none',
        }}
      >
        <SecondaryButton>{OPEN_MAP}</SecondaryButton>
      </Link>
    </>
  );

  return <Card title={currentTitle} content={currentContent}></Card>;
}

export default CurrentGradeCard;
