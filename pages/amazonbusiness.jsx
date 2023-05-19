import React from 'react';
import Head from 'next/head';

const AmazonBusiness = () => {
  const businessProducts = [
    { id: 1, name: 'Product 1', image: '/images/product1.jpg', price: 9.99 },
    { id: 2, name: 'Product 2', image: '/images/product2.jpg', price: 14.99 },
    { id: 3, name: 'Product 3', image: '/images/product3.jpg', price: 19.99 },
    // Add more business products here
  ];

  return (
    <div>
      <Head>
        <title>Amazon Business</title>
      </Head>
      <h1 className="text-3xl font-bold mb-8">Amazon Business</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {businessProducts.map((product) => (
          <div key={product.id} className="border border-gray-200 rounded p-4">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.price}</p>
            {/* Add additional details or buttons for each product */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AmazonBusiness;
