// Campaigns list page


//Use client
"use client";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styles from '../../styles/CampaignList.module.css'; // Import CSS module for styling

interface Campaign {
  _id: string;
  title: string;
  status: string;
  deadline: string;
}

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    // Fetch campaigns from the backend
    const fetchCampaigns = async () => {
      try {
        const response = await axios.get('http://localhost:3001/campaigns'); // Proxy to backend
        setCampaigns(response.data);
      } catch (error) {
        console.error('Error fetching campaigns:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCampaigns();
  }, []);

  if (loading) {
    return <div className={styles.loader}>Loading campaigns...</div>;
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Campaign List</h1>
      {campaigns.length === 0 ? (
        <p>No campaigns found.</p>
      ) : (
        <ul className={styles.list}>
          {campaigns.map((campaign) => (
            <li key={campaign._id} className={styles.card}>
              <h2 className={styles.cardTitle}>{campaign.title}</h2>
              <p>Status: <strong>{campaign.status}</strong></p>
              <p>Deadline: <strong>{new Date(campaign.deadline).toLocaleDateString()}</strong></p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CampaignList;
