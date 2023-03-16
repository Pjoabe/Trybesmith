import orderModel from '../models/order.model';

const retrieveAllOrders = async () => {
  const result = await orderModel.getAllOrders();
  return result;
};

export default { retrieveAllOrders };