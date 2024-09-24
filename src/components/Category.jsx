import React, { useState, useEffect } from 'react';

const categories = [
  {
    topic: 'Arrays',
    questions: [
      { id: 1, title: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/', solved: false },
      { id: 2, title: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/', solved: false },
      { id: 3, title: 'Product of Array Except Self', link: 'https://leetcode.com/problems/product-of-array-except-self/', solved: false },
      { id: 4, title: 'Find Minimum in Rotated Sorted Array', link: 'https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', solved: false },
      { id: 17, title: 'Container With Most Water', link: 'https://leetcode.com/problems/container-with-most-water/', solved: false },
      { id: 18, title: 'Trapping Rain Water', link: 'https://leetcode.com/problems/trapping-rain-water/', solved: false },
    ],
  },
  {
    topic: 'Strings',
    questions: [
      { id: 5, title: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/', solved: false },
      { id: 6, title: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/', solved: false },
      { id: 7, title: 'Group Anagrams', link: 'https://leetcode.com/problems/group-anagrams/', solved: false },
      { id: 8, title: 'Longest Palindromic Substring', link: 'https://leetcode.com/problems/longest-palindromic-substring/', solved: false },
      { id: 19, title: 'Zigzag Conversion', link: 'https://leetcode.com/problems/zigzag-conversion/', solved: false },
      { id: 20, title: 'Longest Common Prefix', link: 'https://leetcode.com/problems/longest-common-prefix/', solved: false },
    ],
  },
  {
    topic: 'Linked Lists',
    questions: [
      { id: 9, title: 'Reverse Linked List', link: 'https://leetcode.com/problems/reverse-linked-list/', solved: false },
      { id: 10, title: 'Merge Two Sorted Lists', link: 'https://leetcode.com/problems/merge-two-sorted-lists/', solved: false },
      { id: 11, title: 'Linked List Cycle', link: 'https://leetcode.com/problems/linked-list-cycle/', solved: false },
      { id: 12, title: 'Remove Nth Node From End of List', link: 'https://leetcode.com/problems/remove-nth-node-from-end-of-list/', solved: false },
      { id: 21, title: 'Add Two Numbers', link: 'https://leetcode.com/problems/add-two-numbers/', solved: false },
      { id: 22, title: 'Palindrome Linked List', link: 'https://leetcode.com/problems/palindrome-linked-list/', solved: false },
    ],
  },
  {
    topic: 'Dynamic Programming',
    questions: [
      { id: 13, title: 'Climbing Stairs', link: 'https://leetcode.com/problems/climbing-stairs/', solved: false },
      { id: 14, title: 'Best Time to Buy and Sell Stock', link: 'https://leetcode.com/problems/best-time-to-buy-and-sell-stock/', solved: false },
      { id: 15, title: 'Longest Increasing Subsequence', link: 'https://leetcode.com/problems/longest-increasing-subsequence/', solved: false },
      { id: 16, title: 'Coin Change', link: 'https://leetcode.com/problems/coin-change/', solved: false },
      { id: 23, title: 'House Robber', link: 'https://leetcode.com/problems/house-robber/', solved: false },
      { id: 24, title: 'Target Sum', link: 'https://leetcode.com/problems/target-sum/', solved: false },
    ],
  },
];

const Category = ({ onQuestionStatusChange }) => {
  const [questionList, setQuestionList] = useState(categories);
  const [progressPercentage, setProgressPercentage] = useState(0);

  // Calculate the progress percentage
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

    // Inform parent component about the question list changes
    onQuestionStatusChange(questionList);
  }, [questionList, onQuestionStatusChange]);

  const toggleSolved = (topicIndex, questionId) => {
    setQuestionList((prevList) =>
      prevList.map((category, idx) =>
        idx === topicIndex
          ? {
              ...category,
              questions: category.questions.map((question) =>
                question.id === questionId ? { ...question, solved: !question.solved } : question
              ),
            }
          : category
      )
    );
  };

  return (
    <div className="container mx-auto p-8">
      <h2 className="text-2xl font-bold mb-6">Questions by Topic</h2>

      {/* Progress Bar */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-2">Progress</h3>
        <div className="bg-gray-200 rounded-full h-6 mb-2">
          <div
            className="bg-green-500 h-6 rounded-full"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
        <p>{progressPercentage.toFixed(2)}% completed</p>
      </div>

      {/* Questions by Category */}
      {questionList.map((category, topicIndex) => (
        <div key={topicIndex} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">{category.topic}</h3>
          <div className="space-y-4">
            {category.questions.map((question) => (
              <div key={question.id} className="flex items-center bg-white shadow-md rounded-lg p-4">
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
    </div>
  );
};

export default Category;