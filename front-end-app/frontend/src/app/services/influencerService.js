import axios from 'axios';

const API_URL = 'http://localhost:3000/influencers'; 

export const fetchInfluencersByCampaign = async (campaignId) => {
  const response = await axios.get(`${API_URL}/campaign/${campaignId}`);
  return response.data;
};