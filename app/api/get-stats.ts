// pages/api/get-stats.ts
import { NextApiRequest, NextApiResponse } from 'next';

const visitCount = 0;
const signUpCount = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json({ visits: visitCount, signUps: signUpCount });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}