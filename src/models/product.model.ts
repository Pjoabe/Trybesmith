import { ResultSetHeader, RowDataPacket } from 'mysql2';
import IProduct from '../interfaces/product.interface';
import connection from './connection';

const createProductModel = async (product: IProduct) => {
  const { amount, name } = product;
  const result = await connection.execute<ResultSetHeader>(`
        INSERT INTO Trybesmith.products (amount, name) 
        VALUES (?, ?);
    `, [amount, name]);
  const [dataInserted] = result;
  const { insertId } = dataInserted;
  return { id: insertId, ...product } as IProduct;
};

const getAllProducts = async (): Promise<IProduct[]> => {
  const [rows] = await connection.execute<IProduct[] & RowDataPacket[]>(`
    SELECT * FROM Trybesmith.products;
  `);
  return rows;
};

export default { createProductModel, getAllProducts };
