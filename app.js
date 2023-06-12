require('dotenv').config();
require('express-async-errors');

const express = require('express');
const app = express();
const connectDB = require('./db/connect');
// error handler
const notFoundMiddleware = require('./middleware/not-found');
const errorHandlerMiddleware = require('./middleware/error-handler');
const sendEmail = require('./controllers/sendEmail');

app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.send('<h1>Email Project</h1><a href="/send">send email</a>');
});
app.get('/send', sendEmail);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    connectDB(process.env.MONGO_URIMONGO_URL);
    console.log('DB connected ..............');
    app.listen(port, () => console.log(`Server is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();
