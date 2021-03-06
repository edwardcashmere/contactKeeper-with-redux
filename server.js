const path = require('path');
const cors = require('cors');
const express = require('express');
const connectMongo = require('./config/db');
const app = express();
const PORT = process.env.PORT || 8081;

//parse body
app.use(express.json({ extended: false }));
app.use(cors());

//bring in database
connectMongo();

//bring in routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/users', require('./routes/users'));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
