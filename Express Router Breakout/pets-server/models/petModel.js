const pool = require('./../database/config');

const getAll = () => {
    const nativeQuery = `
        SELECT *
        FROM pets;
    `;   
    return pool.query(nativeQuery);
};

module.exports = {
    getAll
};