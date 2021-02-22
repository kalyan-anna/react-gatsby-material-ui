import axios from 'axios';

const API = axios.create({
  baseURL: `${process.env.API_URL_BASE}`,
  headers: {
    'Access-Control-Allow-Origin': '*',
  },
});

const fetchFeatureEvents = async () => {
  const response = await API.get(`/featured`);
  return response.data.data;
};

const fetchPopularEvents = async () => {
  const response = await API.get(`/carousel`);
  return response.data.data;
};

export const api = {
  fetchFeatureEvents,
  fetchPopularEvents,
};
