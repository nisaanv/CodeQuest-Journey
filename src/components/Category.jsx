import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import categories from './categoriesData';

const Category = () => {
  const calculateProgress = (questions) => {
    const solvedQuestions = questions.filter((q) => q.solved).length;
    return Math.round((solvedQuestions / questions.length) * 100);
  };

  const [questionList, setQuestionList] = useState(() =>
    categories.map((category) => ({
      ...category,
      progress: calculateProgress(category.questions),
    }))
  );

  const toggleSolved = (topicIndex, questionId) => {
    const updatedList = questionList.map((category, idx) =>
      idx === topicIndex
        ? {
            ...category,
            questions: category.questions.map((question) =>
              question.id === questionId ? { ...question, solved: !question.solved } : question
            ),
            progress: calculateProgress(
              category.questions.map((question) =>
                question.id === questionId ? { ...question, solved: !question.solved } : question
              )
            ),
          }
        : category
    );
    console.log('Updated List:', updatedList); // Debug log
    setQuestionList(updatedList);
  };

  const ProgressBar = ({ progress }) => (
    <div style={{ width: '100%', backgroundColor: '#e5e7eb', borderRadius: '8px', height: '16px', marginBottom: '16px' }}>
      <div
        style={{
          width: `${progress}%`,
          backgroundColor: '#3b82f6',
          height: '100%',
          borderRadius: '8px',
        }}
      ></div>
    </div>
  );

  return (
    <div>
      <Header />
      <div className="container mx-auto p-8">
        <h2 className="text-2xl font-bold mb-6">Questions by Topic</h2>

        {questionList.map((category, topicIndex) => (
          <div key={category.topic} className="mb-8">
            <h3 className="text-xl font-semibold mb-4">{category.topic}</h3>
            <ProgressBar progress={category.progress} />
            <div>
              {category.questions.map((question) => (
                <div key={question.id} className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    checked={question.solved}
                    onChange={() => toggleSolved(topicIndex, question.id)}
                    className="mr-4"
                  />
                  <a
                    href={question.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-lg ${question.solved ? 'line-through text-gray-400' : ''}`}
                  >
                    {question.title}
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-8 text-center">
          <Link
            to="/category"
            className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          >
            View More Questions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
