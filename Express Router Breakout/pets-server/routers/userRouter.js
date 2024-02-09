const express = require('express');
const userRouter = express.Router();
const UserModel = require('./../models/userModel');

userRouter.get('/', (req, res) => {
    UserModel.getAll()
        .then((result) => {
            const templateVariables = {
                users: result.rows
            };
            return res.render('users', templateVariables);
        });
});

userRouter.get('/:userId', (req, res) => {
    const id = req.params.userId;
    UserModel.getOne([id])
        .then((result) => {
            if(result.rows.length === 0){
                return res.render('error', {message: "This userId doesn't exist"});
            }
            const templateVariables = {
                user: result.rows[0]
            };
            return res.render('user', templateVariables);
        });
});

module.exports = userRouter;