import { Products } from "@prisma/client";
import prisma from "database/database";

const TABLE_NAME = "products";

async function getProducts(): Promise<Products[]> {
  const result = await prisma.products.findMany();
  return result;
}

async function getProduct(id: number): Promise<Products> {
  const result = await prisma.products.findFirst({
    where: { id: id },
  });
  return result;
}

async function createProduct(product: CreateProduct): Promise<Products> {
  const result = await prisma.products.create({ data: product });
  return result;
}

export type CreateProduct = Omit<Products, "id">;

const productRepository = {
  getProduct,
  getProducts,
  createProduct,
};

export default productRepository;
