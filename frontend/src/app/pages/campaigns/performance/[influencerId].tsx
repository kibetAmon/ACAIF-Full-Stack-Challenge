//Performance snapshot

"use client";

import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation'; // Use `useParams` instead of `useRouter`
import axios from 'axios';
import styles from '../../../styles/PerformanceSnapshot.module.css'; // Import CSS module

interface PerformanceMetrics {
  totalPosts: number;
  postingDates: string[];
  engagement: {
    likes: number;
    shares: number;
    comments: number;
  };
}

const PerformanceSnapshot: React.FC = () => {
  const { influencerId } = useParams(); // Extract influencerId from the dynamic route
  console.log('Influencer ID:', influencerId);

  const [metrics, setMetrics] = useState<PerformanceMetrics | null>(null);

  useEffect(() => {
    if (influencerId) {
      // Fetch performance metrics for the influencer
      axios
        .get(`http://localhost:3001/campaigns/performance/${influencerId}`)
        .then((response) => setMetrics(response.data))
        .catch((error) => console.error('Error fetching performance metrics:', error));
    }
  }, [influencerId]);

  if (!metrics) {
    return <p>Loading...</p>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Performance Metrics</h1>
      <p>Total Posts Submitted: {metrics.totalPosts}</p>
      <p>Posting Dates:</p>
      <ul>
        {metrics.postingDates.map((date, index) => (
          <li key={index}>{new Date(date).toLocaleDateString()}</li>
        ))}
      </ul>
      <div className={styles.engagement}>
        <p>Estimated Engagement:</p>
        <ul>
          <li>Likes: {metrics.engagement.likes}</li>
          <li>Shares: {metrics.engagement.shares}</li>
          <li>Comments: {metrics.engagement.comments}</li>
        </ul>
      </div>
    </div>
  );
};

export default PerformanceSnapshot;
