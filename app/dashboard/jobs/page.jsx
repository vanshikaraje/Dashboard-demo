// app/dashboard/jobs/page.jsx
'use client';

import { useEffect, useState } from "react";
import styles from "./jobs.module.css"; // Ensure you have this CSS file for styling

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch job data from the API route (Instagram posts)
    const fetchJobs = async () => {
      try {
        const response = await fetch("/api/jobs");
        const data = await response.json();
        setJobs(data);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.jobsContainer}>
      <h1>Job Listings</h1>
      <div className={styles.jobPosts}>
        {jobs.length === 0 ? (
          <p>No job posts found.</p>
        ) : (
          jobs.map((job) => (
            <div key={job.id} className={styles.jobCard}>
              <a href={job.permalink} target="_blank" rel="noopener noreferrer">
                <img src={job.media_url} alt={job.caption} className={styles.jobImage} />
                <div className={styles.jobDetails}>
                  <h3>{job.caption}</h3>
                  <p>{new Date(job.timestamp).toLocaleDateString()}</p>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Jobs;
