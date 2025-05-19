const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Problem = require('./models/Problem');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  dbName: 'codecrackr',
})
  .then(() => console.log('Connected to MongoDB for seeding'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

const problems = [
  {
    title: 'Two Sum',
    description: 'Given an array of integers, return indices of the two numbers such that they add up to a specific target.',
    difficulty: 'Easy',
    solution: '// Your solution here'
  },
  {
    title: 'Merge Intervals',
    description: 'Given an array of intervals, merge all overlapping intervals.',
    difficulty: 'Medium',
    solution: '// Your solution here'
  },
  {
    title: 'Longest Substring Without Repeating Characters',
    description: 'Find the length of the longest substring without repeating characters.',
    difficulty: 'Medium',
    solution: '// Your solution here'
  },
  {
    title: 'Median of Two Sorted Arrays',
    description: 'There are two sorted arrays. Find the median of the two sorted arrays.',
    difficulty: 'Hard',
    solution: '// Your solution here'
  }
];

const seedDB = async () => {
  await Problem.deleteMany(); // optional: to clear existing
  await Problem.insertMany(problems);
  console.log('Database seeded!');
  mongoose.disconnect();
};

seedDB();
