import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import Category from './components/Category';

const App = () => {
  const [questionList, setQuestionList] = useState([]);

  const handleQuestionStatusChange = (updatedQuestions) => {
    setQuestionList(updatedQuestions);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <header className="bg-gray-900 text-white shadow-md">
          <nav className="container mx-auto p-4 flex items-center justify-center space-x-4">
            <Link to="/" className="hover:text-blue-400">Home</Link>
            <span>|</span>
            <Link to="/category" className="hover:text-blue-400">Categories</Link>
          </nav>
        </header>

        {/* Main content area that grows */}
        <main className="flex-grow container mx-auto my-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/category"
              element={<Category onQuestionStatusChange={handleQuestionStatusChange} />}
            />
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
