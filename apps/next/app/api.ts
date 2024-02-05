import {
  generateApiClient,
  type ApiFromNest,
} from '@repo/generated-nest-client';

export const api: ApiFromNest = generateApiClient('http://localhost:3001/');
