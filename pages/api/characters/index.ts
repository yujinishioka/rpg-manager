import { NextApiRequest, NextApiResponse } from 'next';
import { getCharacters } from '@/libs/queries/characters';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    try {
      const characters = await getCharacters();
      res.status(200).json(characters);
    } catch (error) {
      console.error('Erro ao buscar personagens:', error);
      res.status(500).json({ error: 'Erro interno do servidor' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
