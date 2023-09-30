import { useState, useEffect } from 'react';
function useFetchProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch('https://fakestoreapi.com/products')
      .then((res) => res.json())
      .then((json) => {
        setLoading(false);
        setProducts(json);
      });
  }, []);

  return {
    loading,
    products,
  };
}

export default useFetchProducts;
