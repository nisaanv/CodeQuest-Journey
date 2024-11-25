import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Category from './components/Category';
import StudyGuides from './components/StudyGuides';
import VideoTutorials from './components/VideoTutorials';
import Footer from './components/Footer';
import './index.css';

const App = () => {
  const [questionList, setQuestionList] = useState([]);

  const handleQuestionStatusChange = (updatedQuestions) => {
    setQuestionList(updatedQuestions);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <main className="flex-grow container mx-auto my-8 p-4">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/Home" element={<Home />} />
            <Route path="/category" element={<Category onQuestionStatusChange={handleQuestionStatusChange} />} />
            <Route path="/StudyGuides" element={<StudyGuides />} />
            <Route path="/VideoTutorials" element={<VideoTutorials />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
