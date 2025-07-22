"use client"
import Link from 'next/link';
import styles from './menulink.module.css'; 
import {usePathname } from 'next/navigation';// Ensure correct import path

const Menulink = ({item}) => { 
  const pathname = usePathname()
  
  // Capitalize component name
  return (
    <Link href={item.path} className={'${styles.container} ${pathname === item.path && styles.active}'}> {/* Correct the className */}
      {item.icon}
      {item.title}
    </Link>
  );
}

export default Menulink;
