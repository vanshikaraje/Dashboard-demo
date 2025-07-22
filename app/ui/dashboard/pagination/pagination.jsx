"use client"; // Add this line to mark this file as a Client Component

import { useState } from 'react';
import styles from './pagination.module.css';

const Pagination = ({ totalPages, onPageChange }) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Handle page change when clicking "Previous"
  const handlePrevious = () => {
    if (currentPage > 1) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  // Handle page change when clicking "Next"
  const handleNext = () => {
    if (currentPage < totalPages) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      onPageChange(newPage);
    }
  };

  return (
    <div className={styles.container}>
      {/* Previous Button */}
      <button
        className={styles.button}
        onClick={handlePrevious}
        disabled={currentPage === 1}
      >
        Previous
      </button>

      {/* Page Info */}
      <span className={styles.pageInfo}>
        Page {currentPage} of {totalPages}
      </span>

      {/* Next Button */}
      <button
        className={styles.button}
        onClick={handleNext}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
