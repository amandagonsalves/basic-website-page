const Database = require('./db');
const createCard = require('./createCard');
const faker = require('faker');
const deleteCards = require('./deleteCards');

Database.then(async (db) => {
    cardValue = {
        title: faker.lorem.sentence(),
        thumbnail: faker.image.business(),
        description: faker.lorem.paragraph(),
        keywords: faker.lorem.words(),
        textContent: faker.lorem.paragraphs()
    }
    /* await createCard(db, { cardValue }); */
    /* await deleteCards(db, { cardValue }); */
    const selectedCards = await db.all("SELECT * FROM cards");
    console.log(selectedCards)
});
