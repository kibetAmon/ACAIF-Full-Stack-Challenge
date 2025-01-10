import React from 'react';

const CampaignCard = ({ campaign }) => {
  return (
    <div className="campaign-card">
      <h3>{campaign.title}</h3>
      <p>Status: {campaign.status}</p>
      <p>Deadline: {new Date(campaign.deadline).toLocaleDateString()}</p>
    </div>
  );
};

export default CampaignCard;