import React from 'react';

const StudyGuides = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Study Guides for Data Structures and Algorithms</h1>
      <p className="mb-4">
        Explore our curated collection of study guides and documentation to strengthen your understanding of data structures and algorithms.
      </p>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Data Structures</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="https://www.geeksforgeeks.org/data-structures/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks - Data Structures
            </a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/data_structures_algorithms/data_structures_tutorials.htm" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              TutorialsPoint - Data Structures
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/data-structure-tutorial" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              JavaTpoint - Data Structure Tutorial
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Algorithms</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="https://www.geeksforgeeks.org/fundamentals-of-algorithms/" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              GeeksforGeeks - Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.tutorialspoint.com/data_structures_algorithms/algorithms_tutorial.htm" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              TutorialsPoint - Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.javatpoint.com/algorithm-tutorial" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              JavaTpoint - Algorithms Tutorial
            </a>
          </li>
        </ul>
      </div>

      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Additional Resources</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <a href="https://www.khanacademy.org/computing/computer-science/algorithms" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Khan Academy - Algorithms
            </a>
          </li>
          <li>
            <a href="https://www.coursera.org/learn/data-structures-algorithms" className="text-blue-500" target="_blank" rel="noopener noreferrer">
              Coursera - Data Structures and Algorithms Specialization
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default StudyGuides;
