import React, { useEffect, useState } from 'react';

const Practice = () => {
  const [problems, setProblems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProblems = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/problems');
        const data = await res.json();
        setProblems(data);
      } catch (err) {
        console.error('Error fetching problems:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProblems();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }} className="page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }} >Practice Problems</h1>
      {loading ? (
        <p>Loading...</p>
      ) : problems.length === 0 ? (
        <p>No problems found.</p>
      ) : (
        <div className="problems-list">
          {problems.map((problem) => (
            <div key={problem._id} className="problem-card">
              <h2>{problem.title}</h2>
              <p>{problem.description}</p>
              <p><strong>Difficulty:</strong> {problem.difficulty}</p>
              <button className="solve-btn">Solve</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Practice;
