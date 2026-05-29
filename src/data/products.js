import data from "./data.json";

let productsList = [...data.products.ready, ...data.products.custom];

export const READY_PRODUCTS = data.products.ready;
export const CUSTOM_PRODUCTS = data.products.custom;
export const ALL_PRODUCTS = productsList;
export const CATEGORIES = data.categories;

export const getAllProducts = () => {
  return productsList;
};

export const getReadyProducts = () => {
  return productsList.filter((product) => product.category === "ready");
};

export const getCustomProducts = () => {
  return productsList.filter((product) => product.category === "custom");
};

export const getHeroProducts = () => {
  return data.products.hero;
};

export const getBestSellers = () => {
  return data.products.best_sellers;
};

export const getProductById = (id) => {
  return productsList.find((product) => product.id === id) || 
         data.products.best_sellers.find((product) => product.id === id) || 
         data.products.hero.find((product) => product.id === id);
};

export const addProduct = (newProduct) => {
  const exists = productsList.some((product) => product.id === newProduct.id);
  if (!exists) {
    productsList.push(newProduct);
    return true;
  }
  return false;
};

export const deleteProduct = (id) => {
  const initialLength = productsList.length;
  productsList = productsList.filter((product) => product.id !== id);
  return productsList.length < initialLength;
};