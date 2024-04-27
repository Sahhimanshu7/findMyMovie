import { configDotenv } from 'dotenv';
import jwt from 'jsonwebtoken';

configDotenv();

export function createSecretToken(id) {
  return jwt.sign({ id }, process.env.TOKEN_KEY, {
    expiresIn: 3 * 24 * 60 * 60,
  });
}

export function verifySecretToken(user, token){
  if(!token){
    return "No token sent!";
  }

  jwt.verify(token, process.env.TOKEN_KEY, (err, data) => {
    if(err) {
      return { status: false};
    } else {
      return { status: true, user};
    }
  })
}