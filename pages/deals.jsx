import React from 'react';
import Head from 'next/head';
import fetch from 'isomorphic-fetch';
import Header from '../components/Header'
const TodaysDeals = ({ deals }) => {
  return (
      
    <div>
        
      <Head>
        <title>Amazon Today's Deals</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold mb-8">Today's Deals</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {deals.map((deal) => (
          <div key={deal.id} className="border border-gray-200 rounded p-4">
            <img
              src={deal.image}
              alt={deal.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{deal.title}</h2>
            <p className="text-gray-600">${deal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export async function getStaticProps() {
  const response = await fetch('https://fakestoreapi.com/products');
  const deals = await response.json();

  return {
    props: {
      deals,
    },
  };
}

export default TodaysDeals;
