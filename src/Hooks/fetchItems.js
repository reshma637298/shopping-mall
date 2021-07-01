export const fetchElectronics = async () => {
  const result = await fetch(
    "https://fakestoreapi.com/products/category/electronics"
  ).then((data) => {
    return data.json();
  });
  return result;
};

export const fetchJewelery = async () => {
  const result = await fetch(
    "https://fakestoreapi.com/products/category/jewelery"
  ).then((data) => {
    return data.json();
  });
  return result;
};

export const fetchMens = async () => {
  const result = await fetch(
    "https://fakestoreapi.com/products/category/mensclothing"
  ).then((data) => {
    return data.json();
  });
  return result;
};

export const fetchWomens = async () => {
  const result = await fetch(
    "https://fakestoreapi.com/products/category/womensclothing"
  ).then((data) => {
    return data.json();
  });
  return result;
};
