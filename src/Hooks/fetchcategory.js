const fetchCategory = async () => {
  const response = await fetch(
    "https://fakestoreapi.com/products/categories"
  ).then((data) => {
    return data.json();
  });
  return response;
};

export default fetchCategory;
