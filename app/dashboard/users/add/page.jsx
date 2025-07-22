import styles from "@/ui/dashboard/users/addUsers/addUser.module.css";


const AddUserPage = () => {
  return (
    <div className={styles.container}>
      <form action="" className={styles.forms}>
        <input type="text" placeholder="username" name="username" required />
        <input type="email" placeholder="email" name="email" required />
        <input type="password" placeholder="password" name="password" required />
        <input type="phone" placeholder="phone" name="required" required />

        <select name="isAdmin" id="isAdmin">
          <option value={false} selected>Is Admin?</option>
          <option value={true}>yes</option>
          <option value={false}>No</option>
          
        </select>
        <select name="isActive" id="isActive">
          <option value={true} selected>Is Active?</option>
          <option value={true}>yes</option>
          <option value={false}>No</option>
          
        </select>

        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddUserPage;
