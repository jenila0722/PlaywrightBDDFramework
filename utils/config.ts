import dotenv from 'dotenv';

const env = process.env.ENV || 'dev';

dotenv.config({
  path: `env/.env.${env}`,
});

export const Config = {
  baseUrl: process.env.BASE_URL || 'https://www.saucedemo.com',
  environment: env.toUpperCase(),
};