module.exports = async function(db, { cardValue }) {
    const insertedCard = await db.run(`
        INSERT INTO cards (
            title,
            thumbnail,
            description,
            keywords,
            textContent
        ) VALUES (
            "${cardValue.title}",
            "${cardValue.thumbnail}",
            "${cardValue.description}",
            "${cardValue.keywords}",
            "${cardValue.textContent}"
        );
    `);
}