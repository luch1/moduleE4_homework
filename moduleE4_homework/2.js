function isInObject(str, obj){
    return (str in obj);
};

let obj1 = {a: 1, b: 'smth'};

let obj2 = Object.create(obj1);

console.log(isInObject('a', obj2));
console.log(isInObject('b', obj2));
console.log(isInObject('c', obj2));