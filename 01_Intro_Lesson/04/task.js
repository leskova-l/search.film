// Напишите функцию-генератор, которая по номеру книги (book) получает название дома (house)
// с максимальным числом погибших персонажей (character).

fetch('https://anapioficeandfire.com/api/characters/583')
    .then( res => {
        return res.json();
    })
    .then( res => {

    }).catch( console.error);


// function* fetchGenerator(id){
//     const res = yield fetch(`https://anapioficeandfire.com/api/characters/${id}`);  // повернув проміс
//
//     const value = yield res.json();
//     return value.body;
// }
//
// const newFetch = fetchGenerator(15);
// const promise = newFetch.next().value;   //дістала проміс  // повертає done, value
//
// promise.then( data =>{
//     console.log(data);
//     newFetch.next(data)  //іще один проміс, передажмо в середину результат запиту, тоді маємо що парсити в json
//         .then( data =>{
//             console.log(newFetch.next(data))
//         })
//     console.log(newFetch.next());
// });

function* fetchPost(id) {
    const request = yield fetch(`https://anapioficeandfire.com/api/characters/${id}`);

    const post = yield request.json();
console.log(post);
    return post.body;
}

const iterator = fetchPost(15);

const promise = iterator.next().value;

promise.then(data => {
    const anotherPromise = iterator.next(data).value;

    anotherPromise.then(anotherData => {
        console.log(iterator.next(anotherData).value);
    })
})