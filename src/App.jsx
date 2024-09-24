import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import StudyGuides from './components/StudyGuides';
import VideoTutorials from './components/VideoTutorials';

const App = () => {
  const [questionList, setQuestionList] = useState([]);

  const handleQuestionStatusChange = (updatedQuestions) => {
    setQuestionList(updatedQuestions);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <header className="bg-gray-900 text-white shadow-md">
          <nav className="container mx-auto p-4 flex items-center justify-between">
            <h1 className="text-2xl font-bold">HELLO WORLD!</h1>
            <div className="flex space-x-6">
              <Link to="/" className="nav-link">Home</Link>
              <Link to="/category" className="nav-link">Category</Link>
              <Link to="/StudyGuides" className="nav-link">Study Guides</Link>
              <Link to="/VideoTutorials" className="nav-link">Video Tutorials</Link>
            </div>
          </nav>
        </header>

        {/* Main content area that grows */}
        <main className="flex-grow container mx-auto my-8 p-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/category" element={<Category onQuestionStatusChange={handleQuestionStatusChange} />} />
            <Route path="/StudyGuides" element={<StudyGuides />} />
            <Route path="/VideoTutorials" element={<VideoTutorials />} />
          </Routes>
        </main>

        {/* Footer stays at the bottom */}
        <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
          <p>&copy; {new Date().getFullYear()} CodeQuest Journey. All rights reserved.</p>
        </footer>
      </Router>
    </div>
  );
};

export default App;
