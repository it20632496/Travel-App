import axios from 'axios';

// Set your Amadeus API credentials
const API_KEY = l886vC3UnaNIrc91Ou9QMAeZfGyYWymB;
const API_SECRET = sREd2pSt9GZYA8Qo;
const TOKEN_URL = 'https://test.api.amadeus.com/v1/security/oauth2/token';
const FLIGHT_OFFERS_URL = 'https://test.api.amadeus.com/v2/shopping/flight-offers';

let accessToken = '';

// Function to get an access token
const getAccessToken = async () => {
  if (accessToken) return accessToken;

  try {
    const response = await axios.post(TOKEN_URL, {
      grant_type: 'client_credentials',
      client_id: API_KEY,
      client_secret: API_SECRET,
    });

    accessToken = response.data.access_token;
    return accessToken;
  } catch (error) {
    console.error('Error fetching access token:', error);
    throw new Error('Failed to fetch access token');
  }
};

// Function to search for flight offers
export const searchFlights = async (params) => {
  const token = await getAccessToken();

  try {
    const response = await axios.get(FLIGHT_OFFERS_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching flight offers:', error);
    throw new Error('Failed to fetch flight offers');
  }
};
