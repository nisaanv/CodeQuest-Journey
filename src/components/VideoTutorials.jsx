import React from 'react';
import Header from './Header';

const VideoTutorials = () => {
  return (
    <div>
      <Header />
    
    <div className="video-tutorial-page">
      <h1 className="text-3xl font-bold mb-6 text-center">DSA Video Tutorials</h1>

      {/* Introduction Section */}
      <div className="intro-section p-4">
        <p className="mb-6 text-lg">
          These playlists provide a comprehensive guide to learning Data Structures and Algorithms (DSA). You can use the resources from different experts to strengthen your understanding of DSA concepts. Click on the tutor's name below to access their YouTube playlists.
        </p>
      </div>

      {/* Playlists Links with Details */}
      <div className="video-section p-4">
        <h2 className="text-2xl font-semibold mb-2">
          <a
            href="https://youtube.com/playlist?list=PLAXnLdrLnQpRcveZTtD644gM9uzYqJCwr&feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 hover:bg-blue-100 transition-all duration-300"
          >
            Abdul Bari
          </a>
        </h2>
        <p className="text-gray-600 mb-6">
          Abdul Bari provides excellent explanations on basic and advanced DSA concepts. His playlists are very popular among students for building a solid foundation.
        </p>
      </div>

      <div className="video-section p-4">
        <h2 className="text-2xl font-semibold mb-2">
          <a
            href="https://youtube.com/playlist?list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ&feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 hover:bg-blue-100 transition-all duration-300"
          >
            Kunal Kushwaha
          </a>
        </h2>
        <p className="text-gray-600 mb-6">
          Kunal Kushwaha offers a detailed and beginner-friendly approach to learning DSA. His content includes interview tips and problem-solving strategies.
        </p>
      </div>

      <div className="video-section p-4">
        <h2 className="text-2xl font-semibold mb-2">
          <a
            href="https://youtube.com/playlist?list=PLgUwDviBIf0oF6QL8m22w1hIDC1vJ_BHz&feature=shared"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline hover:text-blue-700 hover:bg-blue-100 transition-all duration-300"
          >
            Strivers A2Z
          </a>
        </h2>
        <p className="text-gray-600 mb-6">
          Strivers A2Z is a complete roadmap to mastering DSA, covering a wide range of topics with step-by-step explanations and practical examples.
        </p>
      </div>
      
    </div>
  </div>
  );
};

export default VideoTutorials;
