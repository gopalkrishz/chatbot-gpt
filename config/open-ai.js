import { Configuration, OpenAIApi } from 'openai';
import dotenv from 'dotenv';
dotenv.config();

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,//create a .env file and put your API key with the name OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

export default openai;
