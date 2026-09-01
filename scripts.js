const list = document.querySelector('ul')
const buttonShowAll = document.querySelector('.show-all')
let myLi = ''

function showAll() {
    menuOptions.forEach((product) => {
        myLi += `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })
    list.innerHTML = myLi
}

buttonShowAll.addEventListener('click', showAll)

const buttonMap = document.querySelector('.map-discount') // seleciona o botão "Mapear"

function applyDiscount() {
    const discountedProducts = menuOptions.map((product) => { 
        // percorre cada produto e retorna um novo objeto com o preço já com desconto
        return {
            ...product, // copia todas as propriedades do produto original (name, vegan, src...)
            price: (product.price * 0.9).toFixed(2) 
            // aplica 10% de desconto (multiplica por 0.9) e arredonda pra 2 casas decimais
        }
    })

    myLi = '' // zera a string antes de montar de novo, pra não duplicar os itens

    discountedProducts.forEach((product) => { // percorre o novo array com desconto
        myLi += `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })

    list.innerHTML = myLi // insere os produtos com desconto na <ul>
}

buttonMap.addEventListener('click', applyDiscount) // roda applyDiscount ao clicar no botão


const buttonSum = document.querySelector('.sum-total') // seleciona o botão "Somar tudo"

function sumAll() {
    const total = menuOptions.reduce((accumulator, product) => {
        // accumulator = valor que vai acumulando a soma
        // product = o item atual do array em cada volta
        return accumulator + product.price // soma o preço do produto atual ao acumulador
    }, 0) // 0 é o valor inicial do acumulador

    list.innerHTML = `
        <p class="total-price">Total: R$ ${total.toFixed(2)}</p>
    ` // mostra o total na tela, já formatado com 2 casas decimais
}

buttonSum.addEventListener('click', sumAll) // roda sumAll ao clicar no botão

const buttonFilter = document.querySelector('.filter-vegan') // seleciona o botão "Filtrar"

function filterVegan() {
    const veganProducts = menuOptions.filter((product) => {
        return product.vegan === true 
        // mantém no novo array só os produtos cujo vegan é true
    })

    myLi = '' // zera a string antes de montar de novo, pra não duplicar itens

    veganProducts.forEach((product) => { // percorre só os produtos veganos
        myLi += `
        <li>
            <img src="${product.src}">
            <p>${product.name}</p>
            <p class="item-price">R$ ${product.price}</p>
        </li>
        `
    })

    list.innerHTML = myLi // insere só os produtos veganos na <ul>
}

buttonFilter.addEventListener('click', filterVegan) // roda filterVegan ao clicar no botão