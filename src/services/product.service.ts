import productModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

const createProductInDatabase = async (product: IProduct) => {
  const result = await productModel.createProductModel(product);
  return result;
};

export default { createProductInDatabase };