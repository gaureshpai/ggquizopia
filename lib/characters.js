import { API_ENDPOINT } from '@/utils/endpoint'

export async function getAllCharacters() {
  try {
    const response = await fetch(`${API_ENDPOINT}/characters`);
    if (!response.ok) {
      throw new Error(`Failed to fetch characters: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error('Error fetching characters:', error);
    throw new Error('Failed to fetch characters. Please try again later.');
  }
}

export async function getCharacterBySlug(slug) {
  try {
    const response = await fetch(`${API_ENDPOINT}/characters/${slug}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch character with slug ${slug}: ${response.statusText}`);
    }
    return response.json();
  } catch (error) {
    console.error(`Error fetching character with slug ${slug}:`, error);
    throw new Error(`Failed to fetch character with slug ${slug}. Please try again later.`);
  }
}