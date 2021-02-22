export default class FetchNews {
    constructor () {}

    getLastNews (){
        
       const url = 'https://newsapi.org/v2/everything?' +
           'q=weather&' +
           'language=en&' +          
          'apiKey=dcd86c1488e4473badee8250e13e81e8';
        let req = new Request(url);
        return fetch(req)
            .then(res => res.json(), res => res.status)
            .then(news => {                
                return news
            })
            .catch(reason => reason)
    }
}
