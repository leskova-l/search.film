
// **Описание задания:**
//
// Реализуйте веб-страницу с поиском по фильмам. На странице должен находиться поле для поиска и таблица.
// После ввода поискового запроса в поле для поиска, должны получаться данные для отображения с использованием
// [The Movie Database API](https://developers.themoviedb.org/3/search/search-movies).
// После того, как данные получены - они должны отобразиться в таблице с такими полями
// (минималный набор, можно расширить): ID, Title, Language, Popularity Index, Votes Count, Rating, Release Date.
//
//
//     При клике на заголовок другой колонки, данные должны пересортировываться по значениям в этой колонке аналогично. При этом, необходимо ввести идикатор порядка сортировки для выбранной колонки, например, стрелки вверх и вниз (↑ и ↓).
//
// **Требования:**
//
// 1. Используйте метод [fetch](https://learn.javascript.ru/fetch) для совершения запросов к серверу
// 2. НЕ используйте jQuery. **Только vanilla JavaScript**
// 3. Запрещено использовать сторонние библиотеки для сортировки, этот функционал нужно реализовать самостоятельно
// 4. Постарайтесь реализовать механизм "сортируемости" таблицы максимально переиспользуемым. Так, чтобы его работа не зависела от данных, которые отображаются.
// 5. Готовую, рабочую веб-страницу нужно разместить на Github Pages и приложить ссылку
// 6. Для стилей можно использовать Bootstrap.

class MoviesSearch {

    constructor(form, body){
        this.form = form;
        this.body = body;
        this.movies = [];
        this.currentTh = {
            orderBy: 1,
            target: null
        };

        /**
         * orderBy
         *  1 === DECS
         * -1 === ASC
         * */
        this.orderBy = 1;
        this.th = document.querySelectorAll('thead th');
        this.search = this.search.bind(this);
        this.sort = this.sort.bind(this);
    }

     sortResponse(data){
        this.movies = data.map( item =>{
            return {
                id: item.id,
                title: item.title,
                lang: item.original_language,
                popularity: item.popularity,
                vote: item.vote_count,
                rating: item.vote_average,
                date: item.release_date
            }
        });
    }

     renderTable(){

        this.dropTable();
        this.movies.map( movie =>{
           const tr = document.createElement('tr');
           for ( let key in movie){
               const td = document.createElement('td');
               td.innerHTML = movie[key];
               tr.appendChild(td);
           };
            this.body.appendChild(tr);
        });
    }

    dropTable(){
        const list = this.body.querySelectorAll('tr');
        if (list.length > 0){
            list.forEach( item=>{
                item.remove();
            })
        }
    }

    search(e){
        e.preventDefault();

        const movie = form.elements['movie'].value.trim();
        fetch(`https://api.themoviedb.org/3/search/movie?api_key=67074b3413b6ed02a93ff5bedf1617d3&query=${movie}`, {
            method: "GET"
        })
            .then( res => res.json() )
            .then( res =>{

                this.sortResponse(res.results);
                this.sortInteger();
                this.renderTable();
            })
            .catch(console.error);
    }

    sortInteger(key = 'id'){
        this.movies.sort((prev, current)=>{
            return prev[key] - current[key];
        });
    }

    sortString(key){
        this.movies.sort( (prev, current) =>{
            if (prev[key].toLowerCase() > current[key].toLowerCase()){
                return 1;
            } else if (prev[key].toLowerCase() < current[key].toLowerCase()){
                return -1;
            }
            return 0;
        })
    }

    sortDate(key){
        this.movies.sort( (prev, current)=>{

            if (new Date(prev[key]) > new Date(current[key])){
                return 1
            } else if(new Date(prev[key]) < new Date(current[key])){
                return -1;
            }
            return 0;
        })
    }

    resetClass(arr, target = null){
      for (let item of  arr){
            item.classList.remove('active');
            if (target !== null) {
                item.classList.remove('asc');
            }
        }
    }

    setOrderBy(target){
        if ( target === this.currentTh.target){
            this.currentTh.orderBy *= -1;
            this.resetClass(this.th);
            target.classList.toggle('asc');
        } else {
            this.currentTh.orderBy = 1;
            this.resetClass(this.th, target);
        }
    }

    sort(e){
        const target = e.target;

       this.setOrderBy(target);
        this.currentTh.target = target;

        e.target.classList.add('active');

        const key = e.target.dataset.key;
        switch (e.target.dataset.type){
            case 'int':
                this.sortInteger(key);
                break;

            case 'str':
                this.sortString(key);
                break;

            case 'date':
                this.sortDate(key);
                break;
        }

        if (this.currentTh.orderBy < 0){
            this.movies.reverse();
        }
        this.renderTable();
    }
};

const form = document.forms[0];
const movies = new MoviesSearch(document.forms[0], document.querySelector('tbody') );
const th = document.querySelectorAll('thead th');

th.forEach( item =>{
    item.addEventListener('click', movies.sort)
});
form.addEventListener('submit', movies.search);
