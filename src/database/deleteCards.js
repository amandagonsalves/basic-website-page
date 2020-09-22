module.exports = async function (db, { cardValue }) {
    return db.run(`DELETE FROM cards WHERE id = ?`, [1], function(err){
    if(err) {
        return console.log(err);
    }
      console.log('Registro deletado com sucesso.');
    })
}
