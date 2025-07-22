'use client';

import Image from "next/image";
import styles from "@/ui/dashboard/products/singleProducts/singleProduct.module.css";

const SingleProductPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar.png" alt="Avatar" fill />
        </div>
        PROFILE
      </div>

      <div className={styles.formContainer}>
        <label>Title</label>
        <input type="text" name="title" placeholder="" />

        <label>Price</label>
        <input type="number" name="price" placeholder="" />

        <label>Category</label>
        <input type="text" name="category" placeholder="" />

        <label>Status</label>
        <input type="text" name="status" placeholder="" />

        <label>Color</label>
        <input type="text" name="color" placeholder="Red" />

        <label>Size</label>
        <input type="text" name="size" placeholder="Medium" />

        <label>Description</label>
        <textarea name="desc" placeholder="This is a great service..."></textarea>

        <button className={styles.submitButton}>Update Service</button>
      </div>
    </div>
  );
};

export default SingleProductPage;
