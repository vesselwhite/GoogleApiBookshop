const key = "AIzaSyAG4FEkkPIFNNp2Su8OsOt2BM5HPVkrAJY";
let startIndex = 0;
let subject = "Architecture";

export function useRequest(cb1, cb2) {
    fetch(`https://www.googleapis.com/books/v1/volumes?q="subject:${subject}"&${key}
        API>&printType=books&startIndex=${startIndex}&maxResults=6&langRestrict=en`)
        .then(response => response.json())
        .then(data => {
            if (cb1) {
                cb1(data);
            }
            else {
                console.log("cb1 error");
            }
            if (cb2) {
                cb2();
            }
            else {
                console.log("cb2 error");
            }
        })
        .catch(error => console.log(error));
}

export function displayResult(data) {
    let cards = '';
    data.items.forEach(item => {
        let card = `
            <div class="book-card">
                <div>
                    <img src="${item.volumeInfo.imageLinks.thumbnail}" class = "book-card__img">
                </div>
                <div class="book-info">
                    <p class="book-info__authors"> ${isUndefined(item.volumeInfo.authors)} </p>
                    <p class="book-info__title"> ${isUndefined(item.volumeInfo.title)} </p>
                    <p class="book-info__ratingsCount"> ${isUndefined(item.volumeInfo.ratingsCount)} </p>
                    <p class="book_info__description"> ${isUndefined(item.volumeInfo.description)} </p>
                    <p class="book-info__retailPrice"> ${isUndefined(item.saleInfo.retailPrice)} </p>
                    <button class="book-info__button">buy now</button>
                </div>
            </div>
        `;
        cards += card;
    });
    document.querySelector('.books-page').innerHTML += cards;
}

function isUndefined(str) {
    if (str) {
        return str;
    }
    else {
        return "&nbsp";
    }
}

export function loadMoreFn() {
    const btn = document.querySelector('.load-button__item');
    btn.addEventListener('click', () => {
        startIndex += 6;
        useRequest(displayResult, buyFn);
    });
}

export function chooseCategoryFn() {
    const categories = document.querySelectorAll('.bookshop-list__item');
    categories.forEach(category => {
        category.addEventListener('click', () => {
            subject = category.textContent;
            document.querySelector('.books-page').innerHTML = " ";
            useRequest(displayResult, buyFn);
        })
    })
}

export function buyFn() {
    let counter = 0;
    let bagCounter = document.querySelector('.header__bag-count');
    window.addEventListener('scroll', ()=>{
        bagCounter = document.querySelector('.header__bag-count');
    })
    const buttons = document.querySelectorAll('.book-info__button');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            if (button.textContent === "buy now") {
                button.textContent = "in the cart";
                button.classList.add('book-info__button-active');
                counter++;
                bagCounter.style.display = "block";
                bagCounter.textContent = counter;
            } else {
                button.textContent = "buy now";
                button.classList.remove('book-info__button-active');
                counter--;
                bagCounter.textContent = counter;
                if (counter === 0) {
                    bagCounter.style.display = "none";
                }
            }
        })
    });
}