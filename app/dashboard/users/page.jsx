import styles from "@/ui/dashboard/users/users.module.css";
import Search from "@/ui/dashboard/search/Search";
import Link from "next/link";
import Image from "next/image";
import Pagination from "@/ui/dashboard/pagination/Pagination";

const getUsers = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_URL}/api/users`, {
      cache: "no-store", // Important: to disable caching
    });
    return await res.json();
  } catch (error) {
    console.error("Failed to fetch users", error);
    return [];
  }
};

const UsersPage = async () => {
  const users = await getUsers();

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <Search placeholder="Search for a user..." />
        <Link href="/dashboard/users/add">
          <button className={styles.addButton}>Add New</button>
        </Link>
      </div>

      <table className={styles.table}>
        <thead>
          <tr>
            <td>Name</td>
            <td>Email</td>
            <td>Created At</td>
            <td>Role</td>
            <td>Status</td>
            <td>Actions</td>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>
                <div className={styles.user}>
                  <Image
                    src={user.img || "/noavatar.png"}
                    alt="User Avatar"
                    width={40}
                    height={40}
                    className={styles.userImage}
                  />
                  {user.username}
                </div>
              </td>
              <td>{user.email}</td>
              <td>{new Date(user.createdAt).toLocaleDateString()}</td>
              <td>{user.isAdmin ? "Admin" : "User"}</td>
              <td>{user.isActive ? "Active" : "Inactive"}</td>
              <td className={styles.actions}>
                <Link href={`/dashboard/users/${user._id}`}>
                  <button className={`${styles.button} ${styles.view}`}>View</button>
                </Link>
                <button className={`${styles.button} ${styles.delete}`}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <Pagination />
    </div>
  );
};

export default UsersPage;
