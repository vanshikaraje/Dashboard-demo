// app/dashboard/products/page.jsx
import styles from "@/ui/dashboard/products/products.module.css";
import Search from "@/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/ui/dashboard/pagination/Pagination";

const ProductsPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a service..." />
        <Link href="/dashboard/products/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Service</td>
            <td>Price</td>
            <td>Created At</td>
            <td>Category</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {/* 1. Eric Sandhu (Creator) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Eric Sandhu
              </div>
            </td>
            <td>$99.99</td>
            <td>13.01.2022</td>
            <td>Creators</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/eric">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          {/* 2. Vanshika (Sponsor) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Vanshika
              </div>
            </td>
            <td>$79.99</td>
            <td>22.02.2023</td>
            <td>Sponsors</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/vanshika">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          {/* 3. Ayush Verma (Creator) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Ayush Verma
              </div>
            </td>
            <td>$89.99</td>
            <td>05.03.2024</td>
            <td>Creators</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/ayush">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          {/* 4. Shubhi (Sponsor) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Shubhi
              </div>
            </td>
            <td>$69.99</td>
            <td>10.06.2023</td>
            <td>Sponsors</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/shubhi">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          {/* 5. Pritam (Creator) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Pritam
              </div>
            </td>
            <td>$74.99</td>
            <td>19.08.2023</td>
            <td>Creators</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/pritam">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>

          {/* 6. Pragya (Sponsor) */}
          <tr>
            <td>
              <div className={styles.product}>
                <Image src="/noavatar.png" alt="Service Image" width={40} height={40} className={styles.productImage} />
                Pragya
              </div>
            </td>
            <td>$84.99</td>
            <td>11.09.2023</td>
            <td>Sponsors</td>
            <td>Active</td>
            <td className={styles.actions}>
              <Link href="/dashboard/products/pragya">
                <button className={`${styles.button} ${styles.view}`}>View</button>
              </Link>
              <button className={`${styles.button} ${styles.delete}`}>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default ProductsPage;
