const { VITE_API_BASE_URL } = import.meta.env;
import dummyData from './dummyData.json'

const configOptions = {
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    'x-rapidapi-key': '135af21bf1mshe0d247099e558e9p11c3f8jsn5e52f975ced5',
    'x-rapidapi-host': 'sky-scrapper.p.rapidapi.com'
  },
  credentials: "include",
} as Pick<RequestInit, "headers"|"credentials">



export const SearchAirports = async (query: string) => {
  // const response = await fetch(`${VITE_API_BASE_URL}/flights/searchAirport?query=${query}&locale=en-US`, {
  //   method: "GET",
  //   ...configOptions
  // });
  //
  // if (!response.ok) {
  //   throw new Error(`Error searching Airports`);
  // }
  //
  // return response.json();
  return dummyData;
};