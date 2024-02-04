import type { Config } from 'tailwindcss';
import sharedConfig from '@repo/tailwind-config';
import uiConfig from '@repo/ui/preset';

const config: Pick<Config, 'content' | 'presets'> = {
  content: ['./app/**/*.tsx', '../../packages/ui/src/**/*.{ts,tsx}'],
  presets: [sharedConfig, uiConfig],
};

export default config;
