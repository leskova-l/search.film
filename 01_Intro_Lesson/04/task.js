// Напишите функцию-генератор, которая по номеру книги (book) получает название дома (house)
// с максимальным числом погибших персонажей (character).

// Напишите функцию-генератор, которая по номеру книги (book) получает название дома (house) с максимальным числом погибших персонажей (character).
//
//     Документация API: https://anapioficeandfire.com/


// fetch('https://anapioficeandfire.com/api/characters/583')
//     .then( res => {
//         return res.json();
//     })
//     .then( res => {
//
//     }).catch( console.error);

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

function* fetchBook(id) {
    // try {
        const request = yield fetch(`https://anapioficeandfire.com/api/books/${id}`);

        const post = yield request.json();
    console.log(post);

    return post.body;

}


function helper(generator, nextValue) {
    let next = generator.next(nextValue);
    console.log('done', next.done);
    if (!next.done){
        console.log(next.value);
        next.value.then( (res) =>{
            console.log(res);
            helper(generator, res);
        });
    } else {
        // done
        console.log('true_done', next);
    }

}

helper(fetchBook(1));

function* showUserAvatar() {

    let userFetch = yield fetch('/article/generator/user.json');
    let userInfo = yield userFetch.json();

    let githubFetch = yield fetch(`https://api.github.com/users/${userInfo.name}`);
    let githubUserInfo = yield githubFetch.json();

    let img = new Image();
    img.src = githubUserInfo.avatar_url;
    img.className = "promise-avatar-example";
    document.body.appendChild(img);

    yield new Promise(resolve => setTimeout(resolve, 3000));

    img.remove();

    return img.src;
}