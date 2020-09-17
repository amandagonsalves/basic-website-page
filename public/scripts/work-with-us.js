function populateUfs() {
    const ufSelect = document.querySelector('#state');

    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
    .then(res => res.json())
    .then(states => {
        for (let state of states) {
            ufSelect.innerHTML += ` <option value="${state.id}">${state.nome}</option>`
        };
    });
};

populateUfs();

function getCities(event) {
    const citySelect = document.querySelector('#city');
    const ufValue = event.target.value;
    const stateInput = document.querySelector('input#state')
    const indexOfSelectedState = event.target.selectedIndex

    stateInput.value = event.target.options[indexOfSelectedState].text;

    citySelect.innerHTML = '';
    citySelect.disabled = true;

    const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`

    fetch(url)
    .then(res => res.json())
    .then(cities => {
        for (let city of cities) {
            citySelect.innerHTML += ` <option value="${city.nome}">${city.nome}</option>`
        }
        citySelect.disabled = false;
    })
}
document.querySelector('#state').addEventListener('change', getCities);
