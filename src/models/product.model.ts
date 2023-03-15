import { ResultSetHeader } from 'mysql2';
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

export default { createProductModel };
