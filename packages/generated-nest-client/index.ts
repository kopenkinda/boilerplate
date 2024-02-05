import { fetch as crossFetch } from 'cross-fetch';
import * as client from './client';

client.defaults.fetch = crossFetch;

export type ApiFromNest = typeof client;

export const generateApiClient = (baseUrl: string): ApiFromNest => {
  client.defaults.baseUrl = baseUrl;
  return client;
};
