// pages/api/track-visit.ts
import { NextApiRequest, NextApiResponse } from 'next';

let visitCount = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    visitCount++;
    res.status(200).json({ message: 'Visit counted', visitCount });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}