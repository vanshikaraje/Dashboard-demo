'use client';
import styles from "./sidebar.module.css";
import Image from "next/image";
import Link from "next/link"; 
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from "react-icons/md";

const menuItems = [
  {
    title: "PROFILE",
    list: [
      { title: "Dashboard", path: "/dashboard", icon: <MdDashboard /> },
      { title: "Products", path: "/dashboard/products", icon: <MdShoppingBag /> },
      { title: "Transactions", path: "/dashboard/transactions", icon: <MdAttachMoney /> },
      { title: "Jobs", path: "/dashboard/jobs", icon: <MdWork /> },
      { title: "Analytics", path: "/dashboard/analytics", icon: <MdAnalytics /> },
      { title: "Teams", path: "/dashboard/teams", icon: <MdPeople /> },
      { title: "Settings", path: "/dashboard/settings", icon: <MdOutlineSettings /> },
    ],
  },
  {
    title: "Users",
    list: [
      { title: "Users", path: "/dashboard/users", icon: <MdSupervisedUserCircle /> },
    ],
  },
  {
    title: "Other",
    list: [
      { title: "Help", path: "/dashboard/help", icon: <MdHelpCenter /> },
      { title: "Logout", path: "/logout", icon: <MdLogout /> },
    ],
  },
];

const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.user}>
        <Image
          src="/noavatar.png"
          alt="User Avatar"
          width={50}
          height={50}
          className={styles.avatar}
        />
        <div className={styles.userDetail}>
          <span className={styles.username}>COLABZI</span>
          <span className={styles.userTitle}>ADMIN</span>
        </div>
      </div>
      <ul>
        {menuItems.map((cat) => (
          <li key={cat.title}>
            <span className={styles.category}>{cat.title}</span>
            <ul>
              {cat.list.map((item) => (
                <li key={item.title}>
                  <Link href={item.path} className={styles.menuItem}>
                    {item.icon && <span className={styles.icon}>{item.icon}</span>}
                    <span>{item.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link href="/logout" className={styles.logout}>
        <MdLogout />
        LogOut
      </Link>
    </div>
  );
};

export default Sidebar;
