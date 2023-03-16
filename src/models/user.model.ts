import { ResultSetHeader } from 'mysql2';
import IUser from '../interfaces/user.interface';
import connection from './connection';

const createUserModel = async (user: IUser) => {
  const { username, level, password, vocation } = user;
  const [result] = await connection.execute<ResultSetHeader>(
    'INSERT INTO Trybesmith.users (username, level, password, vocation) VALUES (?, ?, ?, ?);',
    [username, level, password, vocation],
  );
  return { id: result.insertId, ...user } as IUser;
};

export default { createUserModel };