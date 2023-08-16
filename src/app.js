const express = require('express');
const connect = require('./db/connect');
const studentRouter = require('./routers/student');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(studentRouter);

app.listen(port, () => {
    console.log(`listening to the port ${port}`);
})