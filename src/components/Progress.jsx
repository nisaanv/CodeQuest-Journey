import React, { useState, useEffect } from 'react';

const Progress = ({ questionList }) => {
  const [progressPercentage, setProgressPercentage] = useState(0);

  useEffect(() => {
    const totalQuestions = questionList.reduce(
      (acc, category) => acc + category.questions.length,
      0
    );
    const solvedQuestions = questionList.reduce(
      (acc, category) =>
        acc + category.questions.filter((question) => question.solved).length,
      0
    );
    setProgressPercentage((solvedQuestions / totalQuestions) * 100);
  }, [questionList]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>
      <div className="bg-gray-200 rounded-full h-6 mb-4">
        <div
          className="bg-green-500 h-6 rounded-full"
          style={{ width: `${progressPercentage}%` }}
        ></div>
      </div>
      <p>{progressPercentage.toFixed(2)}% completed</p>
    </div>
  );
};

export default Progress;
