const API_BASE = 'http://localhost:5000/api';

export async function fetchProblems() {
  const res = await fetch(`${API_BASE}/problems`);
  return res.json();
}

export async function createProblem(problem) {
  const res = await fetch(`${API_BASE}/problems`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(problem),
  });
  return res.json();
}
