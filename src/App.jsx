import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';
import Progress from './components/Progress';

const App = () => {
  const [questionList, setQuestionList] = useState([]);

  const handleQuestionStatusChange = (updatedQuestions) => {
    setQuestionList(updatedQuestions);
  };

  return (
    <Router>
      <header className="bg-gray-900 text-white shadow-md">
        <nav className="container mx-auto p-4 flex items-center justify-center space-x-4">
          <Link to="/" className="hover:text-blue-400">Home</Link>
          <span>|</span>
          <Link to="/category" className="hover:text-blue-400">Categories</Link>
          <span>|</span>
          <Link to="/progress" className="hover:text-blue-400">Progress</Link>
        </nav>
      </header>

      <main className="container mx-auto my-8">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/category"
            element={<Category onQuestionStatusChange={handleQuestionStatusChange} />}
          />
          <Route
            path="/progress"
            element={<Progress questionList={questionList} />}
          />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white p-4 text-center mt-auto">
        <p>&copy; {new Date().getFullYear()} CodeQuest Journey. All rights reserved.</p>
      </footer>
    </Router>
  );
};

export default App;
