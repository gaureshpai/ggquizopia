import { API_ENDPOINT } from '@/utils/endpoint'
import characters from '@/data/characters.json'
import quotes from '@/data/quotes.json'

export async function getAllCharacters() {
  return { characters: characters.data }
}

export async function getCharacterBySlug(slug) {
  try {
    const character = characters.data.find(item => item.slug === slug);

    if (!character) {
      return null;
    }

    const character_qoutes = quotes.data.filter(
      item => item.character_id === character.id,
    )

    return {
      character,
      character_qoutes: character_qoutes.length > 0 ? character_qoutes : null,
    }
  } catch (error) {
    console.error(`Error fetching character with slug ${slug}:`, error);
    throw new Error(`Failed to fetch character with slug ${slug}. Please try again later.`);
  }
}


function getCharacters(slug){
  if(!slug) return {characters: characters.data};
  try {
    const character = characters.data.find(item => item.slug === slug)

    if (!character) {
      return null;
    }

    const character_qoutes = quotes.data.filter(
      item => item.character_id === character.id,
    )

    return {
      character,
      character_qoutes: character_qoutes.length > 0 ? character_qoutes : null,
    }
  } catch (error) {
    return null;
  }
}