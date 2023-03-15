import productModel from '../models/product.model';
import IProduct from '../interfaces/product.interface';

const createProductInDatabase = async (product: IProduct) => {
  const result = await productModel.createProductModel(product);
  return result;
};

const retrieveAllProducts = async () => {
  const products = await productModel.getAllProducts();
  return products;
};
export default { createProductInDatabase, retrieveAllProducts };