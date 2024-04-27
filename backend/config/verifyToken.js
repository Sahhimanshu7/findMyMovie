import { configDotenv } from 'dotenv';
import jwt from 'jsonwebtoken';

configDotenv();

export function createSecretToken(id) {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
}