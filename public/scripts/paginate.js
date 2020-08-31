const fetch = require('node-fetch');
function populateCards() {
    const data = fetch('https://gist.githubusercontent.com/amandagonsalves2/2c33f0c52b7b666081c206fba6d55807/raw/2c2f9fc12c371ffe2597b98307942bb245f18de8/test-json')
        .then(res => res.json())
        .then(data => {
            console.log(data.length)
            const state = {
                page: 1,
                perPage: 6,
                totalPages: Math.ceil(data.length / 6)
            }
            console.log(state.totalPages)
        });
    const controls = {
        next() {
            state.page++;
            const lastPage = state.page > state.totalPages
            if(lastPage) {
                state.page--
            }
            console.log(state.totalPages)
        },
        prev() { },
        goTo() { }
    }
}
populateCards()