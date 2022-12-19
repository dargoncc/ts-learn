// 联合类型

let phone : number | string = 15661761543

let fn = function (type: number | boolean) : boolean {
    return !!type
}

let result = fn(1)
let result1 = fn(false)

console.log(result);


// 交叉类型
interface people {
    name: string,
    age: number
}
interface  Man {
    sex: string
}

const duochoushangan = (man : people & Man) : void => {
    console.log(man);
    
}
const long = duochoushangan({
    name: '多愁善感',
    age: 36,
    sex: 'male',
})

// 类型断言 , 类型断言可以解决问题 ，但不能滥用，会导致错误

let fn1 = function (val : number | string ) :void {
    console.log((val as string).length);
}

fn1(1)

interface A {
    run : string
}
interface B {
    build: string
}

// 类型断言写法二
let fn2 = (type: A | B) : void => {
    console.log((<A>type).run);
    
}

fn2({
    build: '123'
})