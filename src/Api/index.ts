import { Md5 } from "ts-md5";
import { MarvelApiResponse } from "../@types/Api";

const characters_default_url = 'https://gateway.marvel.com/v1/public/characters?';
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;
const TOKEN_API = import.meta.env.VITE_TOKEN_API;


const timeStamp = Date.now();

const getHash = () => {
  const hash = new Md5().appendStr(timeStamp + TOKEN_API + PUBLIC_KEY).end();
  return hash;
};

const getCharacters = async (characterName: string): Promise<MarvelApiResponse> => {
  const characterNameReplaced = characterName.trim().replace(' ', '%20');
  const hash = getHash();
  const url = `${characters_default_url}nameStartsWith=${characterNameReplaced}&ts=${timeStamp}&apikey=${PUBLIC_KEY}&hash=${hash}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export { getCharacters };