import crypto from 'crypto';
import jwt from 'jsonwebtoken';

const secret = crypto.randomBytes(64).toString('hex');
const newToken = (data:object) => jwt.sign(
  { data }, 
  secret,
  {
    algorithm: 'HS256',
    expiresIn: '3d',
  },
);

const verifyToken = (token:string) => jwt.verify(token, secret);

export default { newToken, verifyToken };
