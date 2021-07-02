export const fetchElectronicsDetails = async (key) => {
  const result = await fetch(`https://fakestoreapi.com/products/${key}`).then(
    (data) => {
      return data.json();
    }
  );
  console.log(key);
  return result;
};
