// 1 - 没有强制限定哪种类型，随时切换类型都可以 我们可以对 any 进行任何操作，不需要检查类型

let any : any = 123
any = '123'
any = true

// 2 - 声明变量的时候没有指定任意类型默认为any

let anys

anys = 123
anys = '123'
anys = true

console.log(anys);


// typescript 3.0 引入 unknown
// 所有类型都可以分配给 unknown

let value : unknown

value = true
value = 123
value = '345'
value = []
value = {}
value = null
value = undefined
value = Symbol('123')

// tips unknown类型不能赋值给其他类型
let names : unknown = '123'
let names2 : string = names

// any 就没问题
let names3 : any = '123'
let names4 :string =names3

// unknown可赋值对象只有unknown 和 any
let aaa : any = 123
let bbb : unknown = 234

bbb = aaa

// 区别

let anyObj : any = { a: 1 }
let unknownObj : unknown = { b: 2, c: () => { console.log('ccc') }}


// any 可以使用
anyObj.a
// 如果是any类型在对象没有这个属性的时候还在获取是不会报错的
anyObj.b

// 如果是unknow 是不能调用属性和方法
// unknownObj.b
// unknownObj.c
