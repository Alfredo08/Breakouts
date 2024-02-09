const express = require('express');
const petRouter = express.Router();
const PetModel = require('./../models/petModel');

petRouter.get('/', (req, res) => {
    PetModel.getAll()
        .then((result) => {
            const templateVariables = {
                pets: result.rows
            };
            return res.render('pets', templateVariables);
        });
});


module.exports = petRouter;