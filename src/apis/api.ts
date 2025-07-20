const { VITE_API_BASE_URL, VITE_RAPID_API_KEY } = import.meta.env;

const configOptions = {
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    'x-rapidapi-key': `${VITE_RAPID_API_KEY}`,
    'x-rapidapi-host': `${VITE_API_BASE_URL}`
  },
  credentials: "include",
} as Pick<RequestInit, "headers"|"credentials">



export const SearchAirports = async (query: string) => {
  const response = await fetch(`${VITE_API_BASE_URL}/flights/searchAirport?query=${query}&locale=en-US`, {
    method: "GET",
    ...configOptions
  });

  if (!response.ok) {
    throw new Error(`Error searching Airports`);
  }

  return response.json();
};