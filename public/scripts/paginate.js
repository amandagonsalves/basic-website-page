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
    document.querySelector('.next').addEventListener('click', e => {
      console.log('ola botao')
    })
}