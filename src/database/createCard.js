module.exports = async function(db, { cardValue }) {
    const insertedCard = await db.run(`
        INSERT INTO cards (
            title,
            thumbnail,
            description,
            action,
            href
        ) VALUES (
            "${cardValue.title}",
            "${cardValue.thumbnail}",
            "${cardValue.description}",
            "${cardValue.action}",
            "${cardValue.href}"
        );
    `);
    
    const card_id = insertedCard.lastID;
}