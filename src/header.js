const originalHeaderContainer = document.querySelector('.header').innerHTML;

export function fixedHeader(){
    const headerContainer = document.querySelector('.header');
    let headerNav = document.querySelector('.header__navigation');
    let header = document.querySelector('header');
    window.onscroll = function showHeader(){
        if(window.pageYOffset > 150){
            headerNav.style.width = "100px";
            header.classList.add('header-fixed');
            headerContainer.innerHTML = `
            <ul class="header__navigation navigation-fixed">
                <li class="header__navigation-link">gifts</li>
                <li class="header__navigation-link">blog</li>
            </ul>
            <div class="header__icons">
                <div class="header__user-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="17px" height="17px" fill="currentColor"
                        class="bi bi-person" viewBox="0 0 16 16">
                        <path
                            d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
                    </svg>
                </div>
                <div class="header__search-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-search"
                        viewBox="0 0 16 16">
                        <path
                            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                    </svg>
                </div>
                <div class="header__bag-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-handbag"
                        viewBox="0 0 16 16">
                        <path
                            d="M8 1a2 2 0 0 1 2 2v2H6V3a2 2 0 0 1 2-2zm3 4V3a3 3 0 1 0-6 0v2H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11zm-1 1v1.5a.5.5 0 0 0 1 0V6h1.639a.5.5 0 0 1 .494.426l1.028 6.851A1.5 1.5 0 0 1 12.678 15H3.322a1.5 1.5 0 0 1-1.483-1.723l1.028-6.851A.5.5 0 0 1 3.36 6H5v1.5a.5.5 0 1 0 1 0V6h4z" />
                    </svg>
                    <div class="header__bag-count">
                    </div>
                </div>
            </div>
            `;
        }
        else{
            header.classList.remove('header-fixed');
            headerContainer.innerHTML = originalHeaderContainer;
        }
    }
}