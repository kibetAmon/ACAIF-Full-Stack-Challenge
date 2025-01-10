import axios from 'axios';

const API_URL = 'http://localhost:3000/campaigns'; 

export const fetchCampaigns = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const fetchCampaignById = async (campaignId) => {
  const response = await axios.get(`${API_URL}/${campaignId}`);
  return response.data;
};