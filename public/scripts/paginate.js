import 'regenerator-runtime/runtime'
import { getData } from './cardsBlog';
import facebook from '../images/facebook.png';
import twitter from '../images/twitter-blog.svg';
import youtube from '../images/youtube-blog.svg';
import instagram from '../images/instagram-blog.svg';

function paginate() {
    let perPage = 6;
    const state = {
        page: 1,
        perPage,
        totalPage: 0,
        maxVisibleButtons: 2
    };

    const html = {
        get(element) {
            return document.querySelector(element);
        }
    };

    const list = {
        create(card) {
            const div = document.createElement('div');
            div.classList.add('card-blog');
            div.innerHTML = `
            <img src="${card.thumbnail}" alt="" class="card-blog__thumbnail">
            <h1 class="card-blog__title">${card.title}</h1>
            <p class="card-blog__description">${card.description}</p>
            <a href="/api/card/${card.id}" class="card-blog__read-more">Ler mais</a>
            <p class="card-blog__words-blog card-blog__words-blog--flex">
                <i class="fa fa-bookmark"></i>
                ${card.keywords}
            </p>
            <ul class="card-blog__social">
                <a href="#" class="card-blog__social-item">
                    <img src="${facebook}" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="${instagram}" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="${twitter}" alt="">
                </a>
                <a href="#" class="card-blog__social-item">
                    <img src="${youtube}" alt="">
                </a>
            </ul>
            `;

            html.get('.cards-blog').appendChild(div);
        },
        async update() {
            
            const data = await getData()

            state.totalPage = Math.ceil(data.length / perPage);

            console.log(data)
            html.get('.cards-blog').innerHTML = '';

            let page = state.page - 1;
            let start = page * state.perPage;
            let end = start + state.perPage;

            const paginatedItems = data.slice(start, end);

            paginatedItems.forEach(list.create)
        }
    }

    const buttons = {
        create(number) {
            const button = document.createElement('div');
            button.classList.add('pagination__item');
            button.innerHTML = `<p>${number}</p>`;

            if (state.page == number) {
                button.classList.add('active');
            }

            button.addEventListener('click', e => {
                const page = e.target.innerText;

                controls.goTo(page);
                update()
            })

            html.get('.pagination__page-numbers').appendChild(button);

        },
        update() {
            html.get('.pagination__page-numbers').innerHTML = '';
            const { maxLeft, maxRight } = buttons.calculateMaxVisible();

            for (let page = maxLeft; page <= maxRight; page++) {
                buttons.create(page);
            };

        },
        calculateMaxVisible() {
            const { maxVisibleButtons } = state;
            let maxLeft = (state.page - Math.floor(maxVisibleButtons / 2));
            let maxRight = (state.page + Math.floor(maxVisibleButtons / 2));

            if (maxRight > state.totalPage) {
                maxLeft = state.totalPage - (maxVisibleButtons - 1);
                maxRight = state.totalPage

                if (maxLeft < 1) maxLeft = 1;
            }
            if (maxLeft < 1) {
                maxLeft = 1;
                maxRight = maxVisibleButtons
            }
            return { maxLeft, maxRight }
        }
    }

    const controls = {
        next() {
            state.page++;

            const lastPage = state.page > state.totalPage;
            if (lastPage) {
                state.page--;
            }
        },
        prev() {
            state.page--;

            if (state.page < 1) {
                state.page++;
            }
        },
        goTo(page) {
            state.page = +page;

            if (page < 1) {
                page = 1;
            }

            if (page > state.totalPage) {
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
        buttons.update();
    }
    function init() {
        update();
        controls.createListeners();
    }
    init()

}
paginate()