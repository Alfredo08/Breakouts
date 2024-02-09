const pool = require('./../database/config');

const getAll = () => {
    const nativeQuery = `
        SELECT *
        FROM users;
    `;
    return pool.query(nativeQuery);
}

const getOne = (data) => {
    const nativeQuery = `
        SELECT *
        FROM users
        WHERE id = $1;
    `;
    return pool.query(nativeQuery, data)
}

module.exports = {
    getAll,
    getOne
};