'use client';  // Since you are using client-side features (React hooks)

import { useState } from "react";
import styles from "./transactions.module.css";  // CSS file for styling

const Transactions = () => {
  // Hardcoded data for transactions
  const transactions = [
    {
      id: 1,
      influencer: "John Doe",
      transactionType: "Paid Partnership",
      amount: "$2000",
      date: "2025-05-01",
    },
    {
      id: 2,
      influencer: "Jane Smith",
      transactionType: "Brand Sponsorship",
      amount: "$3500",
      date: "2025-04-25",
    },
    {
      id: 3,
      influencer: "Sara Lee",
      transactionType: "Paid Post",
      amount: "$1500",
      date: "2025-04-20",
    },
  ];

  return (
    <div className={styles.transactionsContainer}>
      <h1>Transaction History</h1>
      <div className={styles.transactionList}>
        {transactions.length === 0 ? (
          <p>No transactions found.</p>
        ) : (
          transactions.map((transaction) => (
            <div key={transaction.id} className={styles.transactionCard}>
              <h3>{transaction.influencer}</h3>
              <p>{transaction.transactionType}</p>
              <p>{transaction.amount}</p>
              <p>{transaction.date}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Transactions;
