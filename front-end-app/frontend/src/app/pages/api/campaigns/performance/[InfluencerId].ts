//api

import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { influencerId } = req.query;

  if (req.method === 'GET') {
    try {
      const response = await axios.get(`http://localhost:3001/campaigns/performance/${influencerId}`); // Replace with backend URL
      res.status(200).json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'Failed to fetch performance metrics' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
