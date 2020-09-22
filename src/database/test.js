const Database = require('./db');
const createCard = require('./createCard');
const faker = require('faker');
const deleteCards = require('./deleteCards');
const sqlite = require('sqlite-async')

Database.then(async (db) => {
    cardValue = {
        title: faker.lorem.sentence(),
        thumbnail: faker.image.business(),
        description: faker.lorem.paragraph(),
        keywords: faker.lorem.words()
    }
    await createCard(db, { cardValue }); 
    /* await deleteCards(db, { cardValue }); */
    /* db.exec("delete from cards"); */
    const selectedCards = await db.all("SELECT * FROM cards");
    console.log(selectedCards)
});
