const { database } = require('faker');
const Database = require('./database/db');

async function cardsHome() {
    const query = "SELECT * FROM cards";

    try {
        const db = await Database;
        const cards = await db.all(query);
        return cards;
    } catch (error) { 
        console.log(error);
    };
     
}

module.exports = { cardsHome }