const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const problemRoutes = require('./routes/problemRoutes');
require('dotenv').config();

const app = express();
app.use(cors());

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/problems', problemRoutes);


mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(process.env.PORT, () =>
      console.log(`Server running on port ${process.env.PORT}`)
    );
  })
  .catch(err => console.error(err));
