import pool from '@/libs/db';
import { Character } from '@/types/index';

export async function getCharacters(): Promise<Character[]> {
  const result = await pool.query('SELECT * FROM characters');
  return result.rows;
}

export async function getCharactersById(id: number): Promise<Character | null> {
  const result = await pool.query('SELECT * FROM characters WHERE id = $1', [id]);
  return result.rows[0] || null;
}
