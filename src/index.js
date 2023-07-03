import './index.html';
import './style.css';
import * as sliderModule from './slider.js';
import * as headerModule from './header.js';
import * as bookshopModule from './bookshop.js';

//slider

window.addEventListener('resize', sliderModule.init);
sliderModule.chooseSlide();
sliderModule.autoSlide();

//header

headerModule.fixedHeader();

//bookshop

bookshopModule.useRequest(bookshopModule.displayResult,bookshopModule.buyFn);
bookshopModule.loadMoreFn();
bookshopModule.chooseCategoryFn();
