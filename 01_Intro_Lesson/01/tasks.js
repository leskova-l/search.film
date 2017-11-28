/*
 * #1
 * Получить из данного массива пользователей
 * массив их полных имен
 * EX: ['Vasya Vasiliev', 'Ivan Ivanov']
*/

{
    const users = [
        { id: 1, name: 'Vasya', surname: 'Vasiliev' },
        { id: 2, name: 'Ivan', surname: 'Ivanov' },
        { id: 3, name: 'Irina', surname: 'Plushkina' }
    ];

    let fullName = [];
    for ( user of users ){
        let {name, surname} = user;
        fullName.push(`${name} ${surname}`);
    }

    
}

/*
 * #2
 * Получить из данного массива пользователей
 * только тех, кто старше определенного возраста
*/

{
    const users = [
        { id: 1, age: 21, name: 'Vasya', surname: 'Vasiliev' },
        { id: 2, age: 28, name: 'Ivan', surname: 'Ivanov' },
        { id: 3, age: 18, name: 'Irina', surname: 'Plushkina' }
    ];


    function checkAge(age){
        let temp = [];
        return temp = users.filter( user => user.age > age);
    }

    const older = checkAge(15);

}

/*
 * #3
 * Получить из данного массива заказов
 * среднюю сумму заказа
*/

{
    const orders = [{
        id: 5,
        date: '21-01-2015',
        amount: 783
    }, {
        id: 8,
        date: '24-01-2015',
        amount: 67
    }, {
        id: 21,
        date: '29-01-2015',
        amount: 1234
    }, {
        id: 78,
        date: '04-02-2015',
        amount: 123
    }, {
        id: 23,
        date: '15-02-2015',
        amount: 245
    }];

    function getAvarageSumm(){

        const summGeneral = orders.reduce( (summ, current)=>{
            return summ + current.amount;
        }, 0);
        return summGeneral/orders.length;
    };

    const averageSumm = getAvarageSumm();
}


/*
 * #4
 * Получить из данного массива пользователей
 * распределение по интересам
 * EX: { computers: 3, food: 5, math: 1, cats: 3 }
 * где ключ соответствует названию интреса
 * а значение - количество людей с таким интересом
*/

{
    const users = [{
        name: 'Vasya',
        surname: 'Ivanov',
        interests: ['computers', 'food']
    }, {
        name: 'Ivan',
        surname: 'Tretyakov',
        interests: ['computers', 'food', 'cars']
    }, {
        name: 'Daryna',
        surname: 'Petrova',
        interests: ['cars', 'math']
    }, {
        name: 'Petro',
        surname: 'Nalyvaiko',
        interests: ['computers', 'food', 'math']
    }];

    function sort(){
        let EX = {};

        for ( user of users ){
            let {interests} = user;
            interests.forEach( item =>{
                EX[item] = !EX.hasOwnProperty(item)? 1 : +EX[item] +1;
            })
        }
        return EX;
    }

    const EX = sort();

}
