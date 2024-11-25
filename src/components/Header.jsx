import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header className="bg-gray-900 text-white shadow-md w-full">
  <nav className="container mx-auto p-4 flex items-center justify-between">
    <h1 className="text-2xl font-bold">HELLO WORLD!</h1>
    <div className="nav-links">
      <Link to="/Home" className="nav-link px-4">Home</Link>
      <Link to="/category" className="nav-link px-4">Practice</Link>
      <Link to="/StudyGuides" className="nav-link px-4">Study Guides</Link>
      <Link to="/VideoTutorials" className="nav-link px-4">Video Tutorials</Link>
    </div>
  </nav>
</header>

);

export default Header;
