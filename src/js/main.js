import refs from './refs'
import HeaderLogic from './header/headerLogic'
import inputSearchValue from './slider/input'

const headerLogic = new HeaderLogic();
const mainRefs = {
    header: document.querySelector('.header'),
    main: document.querySelector('.main'),
}
mainRefs.header.addEventListener('click', evt => {
    evt.preventDefault();    
    headerLogic.historyApi(evt);    

    if (evt.target.getAttribute('href') === "/photo"){
        refs.hidenSlider.classList.remove('is-hidden')

    }
    // console.log(evt.target);     
})

mainRefs.header.addEventListener('change', evt => {
    evt.preventDefault();       
    headerLogic.searchQuery(evt);   
    // console.log(evt.target);   
     inputSearchValue(evt.target.value)
  
})
mainRefs.main.addEventListener('click', evt => {
     
    if (evt.target.getAttribute('class') !== "photo") {
        evt.preventDefault();       
    }
    // console.log(evt.target);
})



    