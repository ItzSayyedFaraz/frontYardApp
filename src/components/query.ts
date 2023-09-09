// query.ts

import { useQuery } from '@tanstack/react-query';
import { fetchWorldwideData, fetchCountryData, fetchGraphData } from './api';

export const useWorldwideData = () => {
  return useQuery(['worldwideData'], fetchWorldwideData);
};

export const useCountryData = () => {
  return useQuery(['countryData'], fetchCountryData);
};

export const useGraphData = () => {
  return useQuery(['graphData'], fetchGraphData);
};
