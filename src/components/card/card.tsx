import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import styles from './card.module.scss';

export const CardPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
});

export const CardTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
  classname?: string;
}

// renders basic card component witht title and content
export const Card: React.FC<CardProps> = ({ title, content, classname }) => {
  return (
    <>
      <CardPaper elevation={0} className={classname}>
        <div className={styles.title}>{title}</div>
        <div className={styles.content}>{content}</div>
      </CardPaper>
    </>
  );
};
