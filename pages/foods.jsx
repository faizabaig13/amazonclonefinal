import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import Header from '../components/Header'
const FoodGrocery = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/groceryData.json');
        const data = await response.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <Head>
        <title>Food & Grocery</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold mb-8">Food & Grocery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FoodGrocery;
