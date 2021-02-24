import refs from '../refs'

export default class HeaderLogic {
    constructor() {
      
    }
    
    historyApi(evt) {
        const href = evt.target.getAttribute('href');    
    if (href) {
        return history.pushState(null, null, `${href}`)
    }
    }
    searchQuery(evt) {
        if (evt.target === refs.headerButton) {
             if (refs.headerInput.value === '') {
            return;
        }
<<<<<<< HEAD
             return refs.headerInput.value;
=======
             return console.log(refs.headerInput.value);
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
         }   
    }
}


<<<<<<< HEAD


=======
>>>>>>> 8b4f5d67aa31eeadcbb67776d8b36d5bec6d8fa3
