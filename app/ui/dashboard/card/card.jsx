import { MdSupervisedUserCircle } from 'react-icons/md';
import styles from './card.module.css';

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={2} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Sponsers</span>
        <span className={styles.number}>10.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>12%</span> more than previous week
        </span>
      </div>
      
      <div className={styles.texts}>
        <span className={styles.title}>Total Creators</span>
        <span className={styles.number}>5.273</span>
        <span className={styles.detail}>
          <span className={styles.positive}>8%</span> more than previous week
        </span>
      </div>
    </div>
  );
}

export default Card;
