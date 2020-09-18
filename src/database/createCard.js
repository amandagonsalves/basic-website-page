module.exports = async function(db, { cardValue }) {
    const insertedCard = await db.run(`
        INSERT INTO cards (
            title,
            thumbnail,
            description,
            action
        ) VALUES (
            "${cardValue.title}",
            "${cardValue.thumbnail}",
            "${cardValue.description}",
            "${cardValue.action}"
        );
    `);
    
    const card_id = insertedCard.lastID;
    console.log(insertedCard)
}