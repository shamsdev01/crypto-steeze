// pages/api/sign-up.ts
import { NextApiRequest, NextApiResponse } from 'next';

let signUpCount = 0;

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    signUpCount++;
    res.status(200).json({ message: 'Sign-up counted', signUpCount });
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}