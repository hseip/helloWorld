const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.MYSQL_HOST,		// IP address
    port: process.env.MYSQL_PORT,		// port number
    database: process.env.MYSQL_DB,		// default database
    user: process.env.MYSQL_USER,		// user id
    password: process.env.MYSQL_PASSWORD	// password
});

let BASE_db = {};

BASE_db.query1 = (top) => {
    return new Promise((resolve, reject) => {
        pool.query(`
                Select A.JobTitleCollection, count(*) as studentcount from
        (Select StudentID, JobTitleCollection from StudentJobChoices
        where SchoolName = 'Bronx Academy for Software Engineering (BASE)'
        group by StudentID, JobTitleCollection) A
        group by A.JobTitleCollection 
        order by studentcount desc limit ?;
        `, [parseInt(top)],(err, results) => {
            if (err) return reject(err);
            return resolve(results);
        })
    })

}

module.exports = BASE_db;
