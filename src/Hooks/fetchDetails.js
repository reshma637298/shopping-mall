export const fetchElectronicsDetails = async (key) => {
  const result = await fetch(
    `https://fakestoreapi.com/products/${key}`
    // ,{
    //   method: "GET",
    //   mode: "no-cors",
    // }
  ).then((data) => {
    return data.json();
  });
  return result;
};
