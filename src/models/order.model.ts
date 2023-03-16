import { RowDataPacket } from 'mysql2';
import IOrder from '../interfaces/order.interface';
import connection from './connection';

const getAllOrders = async (): Promise<IOrder[]> => {
  const [rows] = await connection.execute<IOrder[] & RowDataPacket[]>(`
SELECT o.id, o.user_id AS userId, 
JSON_ARRAYAGG(p.id) AS productsIds
FROM Trybesmith.orders o
LEFT JOIN Trybesmith.products p ON o.id = p.order_id
GROUP BY o.id, o.user_id;
  `);
  return rows;
};

export default { getAllOrders };