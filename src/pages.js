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

async function getCard(id) {
    const db = await Database;
    const card = await db.all(`SELECT * FROM cards WHERE id = ${id}`); 
    return card;
}

module.exports = { cardsHome, getCard }