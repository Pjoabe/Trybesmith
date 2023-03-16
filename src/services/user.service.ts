import userModel from '../models/user.model';
import IUser from '../interfaces/user.interface';

const createUserInDatabase = async (user: IUser) => {
  const result = await userModel.createUserModel(user);
  return result;
};

export default { createUserInDatabase };