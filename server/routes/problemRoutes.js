const express = require('express');
const router = express.Router();

const problems = [
  {
    _id: '1',
    title: 'Two Sum',
    description: 'Find two numbers that add up to a target.',
    difficulty: 'Easy',
  },
  {
    _id: '2',
    title: 'Longest Substring Without Repeating Characters',
    description: 'Find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
  }
];

router.get('/', (req, res) => {
  console.log("GET /api/problems hit");
  res.json(problems);
});

module.exports = router;


