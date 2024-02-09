const express = require('express');
const userRouter = require('./routers/userRouter');
const petRouter = require('./routers/petRouter');

const app = express();

// Middlewares and engine
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Routers
app.use('/users', userRouter);
app.use('/pets', petRouter);


app.listen(8080, () => {
    console.log("This pets server is running in port 8080");
});