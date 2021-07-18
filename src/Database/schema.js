export const DATABASENAME = "DarioDatabase.realm"
export const PRODUCTS_SCHEMA = "Products";
export const ProductsSchema = {
  name: PRODUCTS_SCHEMA,
  primaryKey: "ProductID",
  properties: {
    ProductID: "int",
    ProductName: "string",
    ProductStep:"string",
    ProductTime:"string",
    ProductImage:"string",
    ProductDate:"string"
  }
};

