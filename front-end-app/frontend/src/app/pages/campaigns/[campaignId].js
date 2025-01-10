import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { fetchCampaignById } from '../../services/campaignService';
import { fetchInfluencersByCampaign } from '../../services/influencerService';
import PerformanceSnapshot from '../../components/PerformanceSnapshot';
import InfluencerList from '../../components/InfluencerList';
import Snapshot from '../../components/Snapshot';

const CampaignDetailsPage = () => {
  const router = useRouter();
  const { campaignId } = router.query;
  
  const [campaign, setCampaign] = useState(null);
  const [performance, setPerformance] = useState(null);
  const [influencers, setInfluencers] = useState([]);
  const [snapshot, setSnapshot] = useState(null);

  useEffect(() => {
    if (campaignId) {
      const getCampaignData = async () => {
        const campaignData = await fetchCampaignById(campaignId);
        setCampaign(campaignData);
        setPerformance(campaignData.performance);
        setSnapshot(campaignData.snapshot);
      };
      const getInfluencers = async () => {
        const influencerData = await fetchInfluencersByCampaign(campaignId);
        setInfluencers(influencerData);
      };
      getCampaignData();
      getInfluencers();
    }
  }, [campaignId]);

  if (!campaign) return <div>Loading...</div>;

  return (
    <div>
      <h1>{campaign.title}</h1>
      <PerformanceSnapshot performance={performance} />
      <InfluencerList influencers={influencers} />
      <Snapshot snapshot={snapshot} />
    </div>
  );
};

export default CampaignDetailsPage;