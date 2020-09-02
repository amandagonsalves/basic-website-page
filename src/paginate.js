function paginate(data) {
    console.log('ola,');
    console.log(data)

    let perPage = 6;
    const state = {
        page: 1,
        perPage,
        totalPage: Math.ceil(data.length/perPage)
    };
    const controls = {
        next() {
            state.page++;

            const lastPage = state.page > state.totalPage;
            if(lastPage) {
                state.page--;
            }
        },
        prev() {},
        goTo() {}
    }
    console.log(state.page)
}
module.exports =  {
    paginate
}
