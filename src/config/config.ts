import * as dotenv from 'dotenv';
dotenv.config();

const CONFIG = {
  APP: process.env.APP || 'development',
  PORT: process.env.PORT || '8000',
};

export default CONFIG;