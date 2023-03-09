// 1。 在类型后面跟上 extends 然后跟上约束的类型
function add<T extends number>(a:T, b:T) {
    return a + b
}
add(1,2)
// add(undefined,undefined) // 输出的结果是NaN

let obj1111 = {
    name: 'zhangsan',
    sex: 'male',
}

// keyof 用来获取对象的key
type Key = keyof typeof obj1111

function ob<T extends object,K extends keyof T>(obj:T, key: K) {
    return obj[key]
}

console.log(ob(obj1111, 'age')); // 报错 age 不在obj1111中

// keyof 高级用法
interface Data {
    name: string,
    age: number,
    sex: string
}

// for in 遍历对象
type Options<T extends Object> = {
    [key in keyof Data]?: Data[key]
}

type BBBBB = Options<Data>