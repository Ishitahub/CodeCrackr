import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/leaderboard');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        console.error('Error loading leaderboard:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '2rem' }} className="page-container">
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }} >Leaderboard</h1>
      {loading ? (
        <p>Loading...</p>
      ) : users.length === 0 ? (
        <p>No data yet.</p>
      ) : (
        <table className="leaderboard-table">
          <thead>
            <tr>
              <th>Rank</th>
              <th>User</th>
              <th>Score</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, idx) => (
              <tr key={user._id}>
                <td>{idx + 1}</td>
                <td>{user.name}</td>
                <td>{user.score}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Leaderboard;
