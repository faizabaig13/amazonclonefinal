import React from 'react';
import Head from 'next/head';
import Header from '../components/Header'
const PrimeVideo = () => {
  const videoData = [
    { id: 1, title: 'Video 1', thumbnail: '/images/video 1.jpeg' },
    { id: 2, title: 'Video 2', thumbnail: '/images/video 2.jpeg' },
    { id: 3, title: 'Video 3', thumbnail: '/images/video3.jpeg' },
    // Add more video items here
  ];

  return (
    <div>
      <Head>
        <title>Prime Video</title>
      </Head>
      <Header />
      <h1 className="text-3xl font-bold mb-8">Prime Video</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {videoData.map((video) => (
          <div key={video.id} className="border border-gray-200 rounded p-4">
            <img
              src={video.thumbnail}
              alt={video.title}
              className="w-full h-40 object-contain mb-4"
            />
            <h2 className="text-lg font-semibold mb-2">{video.title}</h2>
            {/* Add additional details or buttons for each video */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrimeVideo;
