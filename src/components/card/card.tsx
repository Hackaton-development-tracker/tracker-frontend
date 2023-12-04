import { styled } from '@mui/material/styles';
import { Paper, Typography } from '@mui/material';
import styles from './card.module.scss';
import vars from '../../static/scss/export.module.scss';

export const CardPaper = styled(Paper)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '16px',
  borderRadius: '8px',
  border: `1px solid ${vars.colorBlack100}`,
  minWidth: '296px',
  maxWidth: '592px',
  width: '100%',
  minHeight: '166px',
});

export const CardTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '13px',
  lineHeight: '16px',
  letterSpacing: 0,
});

interface CardProps {
  title: React.ReactNode;
  content: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <>
      <CardPaper elevation={0}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__content}>{content}</div>
      </CardPaper>
    </>
  );
};
