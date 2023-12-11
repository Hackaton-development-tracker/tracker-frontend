import styles from './card.module.scss';
import { CardPaper } from '../cardelements';

type CardProps = {
  title: React.ReactNode;
  content: React.ReactNode;
  classname?: string;
}

// renders basic card component witht title and content
export const Card: React.FC<CardProps> = ({ title, content, classname }) => {
  return (
    <>
      <CardPaper elevation={0} className={classname}>
        <div className={styles.card__title}>{title}</div>
        <div className={styles.card__content}>{content}</div>
      </CardPaper>
    </>
  );
};
