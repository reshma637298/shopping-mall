export const fetchDetails = async (key) => {
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

// export const fetchJeweleryDetails = async (key) => {
//   const result = await fetch(
//     `https://fakestoreapi.com/products/${key}`
//     // ,{
//     //   method: "GET",
//     //   mode: "no-cors",
//     // }
//   ).then((data) => {
//     return data.json();
//   });
//   return result;
// };
