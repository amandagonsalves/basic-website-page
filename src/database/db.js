const Database = require('sqlite-async');
function execute(db) {
    return db.exec(`
        CREATE TABLE IF NOT EXISTS cards (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            thumbnail TEXT,
            description TEXT,
            keywords TEXT,
            textContent TEXT
        );      
    `);
    
};
module.exports = Database.open(__dirname + '/database.sqlite').then(execute);