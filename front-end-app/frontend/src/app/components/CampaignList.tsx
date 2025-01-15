import React from 'react';
import styles from './CampaignList.module.css';

interface Campaign {
  title: string;
  status: string;
  deadline: string;
}

interface CampaignListProps {
  campaigns: Campaign[];
}

const CampaignList: React.FC<CampaignListProps> = ({ campaigns }) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Campaign List</h2>
      <ul>
        {campaigns.map((campaign, index) => (
          <li key={index}>
            <p>
              <strong>{campaign.title}</strong> - <span className={styles.status}>{campaign.status}</span> (Deadline: {new Date(campaign.deadline).toLocaleDateString()})
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CampaignList;
