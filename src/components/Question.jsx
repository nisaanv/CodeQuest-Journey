// import React, { useState, useEffect } from 'react';
// import { useParams } from 'react-router-dom';

// const questionsData = {
//   arrays: [
//     { question: 'Two Sum', link: 'https://leetcode.com/problems/two-sum/' },
//     { question: 'Maximum Subarray', link: 'https://leetcode.com/problems/maximum-subarray/' }
//   ],
//   strings: [
//     { question: 'Valid Palindrome', link: 'https://leetcode.com/problems/valid-palindrome/' },
//     { question: 'Longest Substring Without Repeating Characters', link: 'https://leetcode.com/problems/longest-substring-without-repeating-characters/' }
//   ],
// };

// const Question = ({ question, link }) => {
//   const [solved, setSolved] = useState(false);

//   useEffect(() => {
//     const savedStatus = localStorage.getItem(question);
//     if (savedStatus) {
//       setSolved(JSON.parse(savedStatus));
//     }
//   }, [question]);

//   const toggleSolved = () => {
//     setSolved(!solved);
//     localStorage.setItem(question, JSON.stringify(!solved));
//   };

//   return (
//     <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md mb-2">
//       <a href={link} target="_blank" rel="noopener noreferrer" className="text-blue-500">
//         {question}
//       </a>
//       <button 
//         onClick={toggleSolved}
//         className={py-1 px-2 ${solved ? 'bg-green-500' : 'bg-red-500'} text-white rounded-md}
//       >
//         {solved ? 'Solved' : 'Unsolved'}
//       </button>
//     </div>
//   );
// };

// const Questions = () => {
//   const { id } = useParams();
//   const questions = questionsData[id];

//   return (
//     <div className="p-10">
//       <h1 className="text-3xl font-bold mb-6">Questions for {id.charAt(0).toUpperCase() + id.slice(1)}</h1>
//       {questions ? (
//         questions.map((q, index) => (
//           <Question key={index} question={q.question} link={q.link} />
//         ))
//       ) : (
//         <p>No questions available for this category.</p>
//       )}
//     </div>
//   );
// };

// export default Questions;