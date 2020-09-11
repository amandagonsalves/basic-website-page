import data from '../../src/cards-blog.json'
function paginate() {
    console.log(data)
    const html = {
        get(element) {
            return document.querySelector(element);
        }
    }

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
        prev() {
            state.page--;

            if(state.page < 1) {
                state.page++;
            }
        },
        goTo(page) {
            state.page = page;

            if(page <  1) {
                page = 1;
            }

            if(page > state.totalPage) {
                state.page = state.totalPage;
            }
        },
        createListeners() {

            html.get('#first').addEventListener('click', e => {
                controls.goTo(1);
                update()
            });

            html.get('#last').addEventListener('click', e => {
                controls.goTo(state.totalPage)
                update()
            });

            html.get('#next').addEventListener('click', e => {
                controls.next();
                update()
            });

            html.get('#prev').addEventListener('click', e => {
                controls.prev();
                update()
            });
        }
    }
    controls.createListeners()
    function update() {
        console.log(state.page)
    } 
}
paginate()