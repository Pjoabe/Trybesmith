import { Request, Response } from 'express';
import userService from '../services/user.service';
import auth from '../auth/token';
import IUser from '../interfaces/user.interface';

const createUser = async (req:Request, res: Response) => {
  const newUserData: IUser = req.body;
  const response = await userService.createUserInDatabase(newUserData);
  const { password, ...data } = response;
  const token = auth.newToken(data);
  res.status(201).json({ token });
};

export default { createUser };