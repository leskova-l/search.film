/*
 * #1
 * Напишите функцию, которая будет преобразовывать массив
 * со вложенными массивами в один плоский массив
 * EX:
 * in  : [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]]
 * out : [1, 2, 3, 4, 5, 2, 4, 3, 2, 3, 1, 4, 3]
*/

{
    const numbers = [1, [2, 3, [4, 5], [2, 4]], 3, [[2, [3, [1]], 4], [3]]];   var out = [];
    function convert(arr){


        arr.forEach( item => {
            if (typeof item === "object") {
                return convert(item)
            }
            out.push(item);
        }, );

        return out;
    }
    const result = convert(numbers);
}

/*
 * #2
 * Напишите функцию, которая будет преобразовывать
 * ключи объекта в camelCase
 * EX 1:
 * in  : { user_name: 'shar', is_logged_in: true }
 * out : { userName: 'shar', isLoggedIn: true }
 *
 * EX 2:
 * in  : { 'user NAME': 'shar', TYPE: true }
 * out : { userName: 'shar', type: true }
*/

{
    function convertKey(obj, sep) {
    let newObj = {};
    for ( key in obj){
        if (key.search(sep) != -1){
            let arrKey = key.split(sep);
            let temp = arrKey.reduce( (prev, current) => 																									prev.toLowerCase()+current[0].toUpperCase()+
            current.slice(1).toLowerCase());
            newObj[temp] = obj[key];
        } else {
            newObj[key.toLowerCase()]=obj[key];
        }
    }

    return newObj;
}
    const out1 = convertKey({ user_name: 'shar', is_logged_in: true }, '_');
    const out2 = convertKey({ 'user NAME': 'shar', TYPE: true }, ' ');
}

/*
 * #3
 * Усовершенствуйте функцию из задания выше так,
 * чтобы она работала и для вложенных структур тоже
 * EX:
 * in  : { all_users: [{ user_name: 'shar', info: { full_description: '42' } }] }
 * out : { allUsers: [{ userName: 'shar', info: { fullDescription: '42' } }] }
 *
 * P.S. Постарайтесь переиспользовать общую логику
*/

{

    function convertKey(obj, sep) {
        let newObj = {};
        for ( key of obj){
            if (key.search(sep) != -1){
                let arrKey = key.split(sep);
                let temp = arrKey.reduce( (prev, current) => 																									prev.toLowerCase()+current[0].toUpperCase()+
                current.slice(1).toLowerCase());
                newObj[temp] = obj[key];
            } else {
                newObj[key.toLowerCase()]=obj[key];
            }
        }

        return newObj;
    }

    const obj1 = { 'all-users': [{ user_name: 'shar', info: { full_description: '42' } }] };
    // convertKey(obj1, '_');
}



function get(id) {
    var url = `https://anapioficeandfire.com/api/characters/${id}`;

    fetch(url)
        .then( response=>{
            console.log(response);
            return response.json();
        })
        .then( book=>{
            console.log(book);
        })
        .catch( error=>{
            console.log(error);
        })


}

// get(21);

function* fetchGen (){

    const req = yield  fetch('https://anapioficeandfire.com/api/characters/2') // має повернути проміс
    // const req1 = yield  fetch('https://anapioficeandfire.com/api/characters/3')
    // console.log(req); // отрива із промісу в then
    const post = yield req.json();

    // console.log('post', post);
    return post;
}


//
// let iterator = fetchGen();
// let promise = iterator.next().value; // promise // yield 1

function run(generator) {

    const iterator = generator();

    function iterate({ value, done }) {
        if( done ) return value;

        return value.then( data => {
           iterate( iterator.next(data));
        });
    }

    return iterate(iterator.next()); // перший запуск
}

run(fetchGen).then( data => console.log('data', data)).catch(console.error);

// promise.then( data => {
//     // console.log(iterator.next(data)); // передача даних назад в генератор і повертає promiss
//
//     const nextPromise = iterator.next(data).value; // yield 2
//     let body;
//         nextPromise.then( data => {
//           body = iterator.next(data);
//     console.log(body);
//         })
//
//     console.log(body); // показує різні дані
//
// })


