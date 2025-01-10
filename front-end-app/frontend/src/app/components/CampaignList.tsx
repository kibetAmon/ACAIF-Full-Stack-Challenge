import React, { useEffect, useState } from 'react';
import { fetchCampaigns } from '../services/campaignService';
import CampaignCard from './CampaignCard';

const CampaignList = () => {
  const [campaigns, setCampaigns] = useState([]);

  useEffect(() => {
    const getCampaigns = async () => {
      const data = await fetchCampaigns();
      setCampaigns(data);
    };
    getCampaigns();
  }, []);

  return (
    <div className="campaign-list">
      {campaigns.map((campaign) => (
        <CampaignCard key={campaign._id} campaign={campaign} />
      ))}
    </div>
  );
};

export default CampaignList;