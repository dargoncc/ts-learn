let s :symbol = Symbol('123')
let k :symbol = Symbol(123)

console.log(s, k);
console.log(s === k)

let obj = {
    [s]: 'val',
    [k]: 123,
    name: 'caicai',
    sex: '女'
}

console.log(obj);
console.log(obj[s]);

// 不会打印symbol定义的属性

// 1 for in 
for (const key in obj) {
    console.log(key);
}

// object.keys() 
console.log(Object.keys(obj));

// getOwnPropertyNames
console.log(Object.getOwnPropertyNames(obj));

// jsonStringify
console.log(JSON.stringify(obj));


// 取值
console.log(Object.getOwnPropertySymbols(obj));

console.log(Reflect.ownKeys(obj));

