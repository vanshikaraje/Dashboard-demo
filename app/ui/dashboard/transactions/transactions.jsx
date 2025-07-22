import Image from 'next/image';
import styles from './transactions.module.css';

const Transactions = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Latest Deals</h2>
      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody>
          <tr key="1">
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Eric Sandhu" width={40} height={40} className={styles.userImage} />
                Eric Sandhu
              </div>
            </td>
            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>12.04.2024</td>
            <td>$3,200</td>
          </tr>
          <tr key="2">
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Vanshika" width={40} height={40} className={styles.userImage} />
                Vanshika
              </div>
            </td>
            <td><span className={`${styles.status} ${styles.done}`}>Done</span></td>
            <td>18.03.2024</td>
            <td>$2,950</td>
          </tr>
          <tr key="3">
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Ayush Verma" width={40} height={40} className={styles.userImage} />
                Ayush Verma
              </div>
            </td>
            <td><span className={`${styles.status} ${styles.cancelled}`}>Cancelled</span></td>
            <td>21.02.2024</td>
            <td>$2,400</td>
          </tr>
          <tr key="4">
            <td>
              <div className={styles.user}>
                <Image src="/noavatar.png" alt="Shubhi Agarwal" width={40} height={40} className={styles.userImage} />
                Shubhi Agarwal
              </div>
            </td>
            <td><span className={`${styles.status} ${styles.pending}`}>Pending</span></td>
            <td>10.01.2024</td>
            <td>$3,000</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
