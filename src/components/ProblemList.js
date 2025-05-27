import React, { useEffect, useState } from 'react';
import { fetchProblems } from '../api';

function ProblemList() {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    async function load() {
      const data = await fetchProblems();
      setProblems(data);
    }
    load();
  }, []);

  return (
    <div className="problem-list">
      <h2>Problems</h2>
      {problems.length === 0 ? (
        <p>No problems found.</p>
      ) : (
        <ul>
          {problems.map(problem => (
            <li key={problem._id}>
              <strong>{problem.title}</strong> - {problem.difficulty}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProblemList;

