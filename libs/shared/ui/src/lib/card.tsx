import styles from './card.module.css';

interface CardProps {
  title: string;
}

export function Card(props: CardProps) {
  return (
    <div className={styles['card']}>
      <h1>{props.title}</h1>
    </div>
  );
}

export default Card;
