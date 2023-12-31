import styles from './profCard.module.scss';
import { Card } from '../card/card';

type CardProps = {
  image: string;
  title: () => React.ReactNode;
  content: () => React.ReactNode;
}

// renders card for courses with image
export const ProfCard: React.FC<CardProps> = ({ image, title, content }) => {
  return (
    <article className={styles.profcard}>
      <div className={styles.profcardImagecontainer}>
        <img src={image} alt="image" className={styles.profcardImage} />
        <div className={styles.profcardOverlay}></div>
      </div>
      <Card title={title()} content={content()} classname={styles.cardtext} />
    </article>
  );
};
