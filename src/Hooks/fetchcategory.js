const fetchCategory = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((data) => {
    return data.json();
  });
  return response;
};

export default fetchCategory;


// const getApi = async () => {
//   const response = await fetch("https://fakestoreapi.com/products/categories")
//     // .then((res) => res.json())
//     .then((data) => {
//       // console.log(data.json());
//       return data.json();
//     });
//   // console.log(response);
//   return response;
// };
// export default getApi;