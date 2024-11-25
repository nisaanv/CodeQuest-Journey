// import React from 'react';

// const QuestionList = ({ questions, topicIndex, toggleSolved }) => {
//   return (
//     <div>
//       {questions.map((question) => (
//         <div key={question.id} className="flex items-center mb-4">
//           <input
//             type="checkbox"
//             checked={question.solved}
//             onChange={() => toggleSolved(topicIndex, question.id)}
//             className="mr-4"
//           />
//           <a
//             href={question.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className={`text-lg ${question.solved ? 'line-through text-gray-400' : ''}`}
//           >
//             {question.title}
//           </a>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionList;