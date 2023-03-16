import { Request, Response } from 'express';
import orderService from '../services/order.service';

const getOrders = async (_req:Request, res: Response) => {
  const response = await orderService.retrieveAllOrders();
  res.status(200).json(response);
};

export default { getOrders };