function populateCards() {
    console.log(cards)
}
populateCards();
const state = {
    page: 1,
    perPage: 6,
    totalPages: cards.length/6
}
const controls = {
    next() {
        state.page++
        console.log(state.totalPages)
    },
    prev() {},
    goTo() {}
}