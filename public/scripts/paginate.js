import data from '../../src/cards-blog.json'
function paginate() {
    console.log(data)

    let perPage = 6;
    const state = {
        page: 1,
        perPage,
        totalPage: Math.ceil(data.length/perPage)
    };

    const html = {
        get(element) {
            return document.querySelector(element);
        }
    }

    const list = {
        create(card) {
            const div = document.createElement('div');
            div.classList.add('card-blog');
            div.innerHTML = `
            <img src="${card.thumbnail}" alt="" class="card-blog__photo">
            <h1 class="card-blog__title">${card.title}</h1>
            <p class="card-blog__description">${card.description}</p>
            <a href="#" class="card-blog__read-more">Ler mais</a>
            <p class="card-blog__words-blog">
                <i class="fa fa-bookmark"></i>
                <p class="card-blog__words-blog">${card.keywords}</p>
            </p>
            <ul class="card-blog__social">
                <a href="#" class="card-blog__social-item">
                    <img src="../images/youtube-blog.svg" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="../images/facebook-blog.svg" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="../images/instagram-blog.svg" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="../images/twitter-blog.svg" alt="">
                </a>
            </ul>
            `;

            html.get('.cards-blog').appendChild(div);
        }, 
        update() {
            html.get('.cards-blog').innerHTML = ''; 

            let page = state.page - 1;
            let start = page * state.perPage;
            let end = start + state.perPage;
            
            const paginatedItems = data.slice(start, end);
            
            paginatedItems.forEach(list.create)
        }
    }
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

    function update() {
        list.update();
    } 
    function init() {
        list.update();
        controls.createListeners();
    }
    init()
   
}
paginate()