import { styled } from '@mui/material/styles';
import { Typography } from '@mui/material';
import styles from './profCard.module.scss';
import { Card } from '../card/card';

interface CardProps {
  image: string;
  title: React.ReactNode;
  content: React.ReactNode;
}

export const CardTypography = styled(Typography)({
  fontFamily: 'YS Text Regular',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 0,
});

export const ProfCard: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <article className={styles.profcard}>
        <img src={image} alt="image" className={styles.image}/>
        <Card title={title} content={content} classname={styles.cardtext}/>      
    </article>
  );
};
