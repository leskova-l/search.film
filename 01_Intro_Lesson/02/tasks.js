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


}
