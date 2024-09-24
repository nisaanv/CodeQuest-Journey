// import React, { useState, useEffect } from 'react';

// const Progress = ({ questionList }) => {
//   // Create a local copy of the questions with state to track if solved or not
//   const [questions, setQuestions] = useState(questionList);

//   const [progressPercentage, setProgressPercentage] = useState(0);

//   useEffect(() => {
//     // Update progress percentage whenever questions change
//     const totalQuestions = questions.reduce(
//       (acc, category) => acc + category.questions.length,
//       0
//     );
//     const solvedQuestions = questions.reduce(
//       (acc, category) =>
//         acc + category.questions.filter((question) => question.solved).length,
//       0
//     );

//     // Prevent division by zero
//     if (totalQuestions > 0) {
//       setProgressPercentage((solvedQuestions / totalQuestions) * 100);
//     } else {
//       setProgressPercentage(0);
//     }
//   }, [questions]);

//   // Function to handle question toggle (solved/unsolved)
//   const handleToggleSolved = (categoryIndex, questionIndex) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[categoryIndex].questions[questionIndex].solved =
//       !updatedQuestions[categoryIndex].questions[questionIndex].solved;
//     setQuestions(updatedQuestions);
//   };

//   return (
//     <div className="p-8">
//       <h2 className="text-2xl font-semibold mb-4">Progress Tracker</h2>

//       <div className="bg-gray-200 rounded-full h-6 mb-4">
//         <div
//           className="bg-green-500 h-6 rounded-full transition-all duration-500"
//           style={{ width: `${progressPercentage}%` }}
//         ></div>
//       </div>
//       <p>{progressPercentage.toFixed(2)}% completed</p>

//       <div className="mt-4">
//         {questions.map((category, categoryIndex) => (
//           <div key={categoryIndex} className="mb-4">
//             <h3 className="text-xl font-bold mb-2">{category.name}</h3>
//             <ul>
//               {category.questions.map((question, questionIndex) => (
//                 <li key={questionIndex} className="mb-1 flex items-center">
//                   <input
//                     type="checkbox"
//                     className="mr-2"
//                     checked={question.solved}
//                     onChange={() =>
//                       handleToggleSolved(categoryIndex, questionIndex)
//                     }
//                   />
//                   {question.text}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Progress;
