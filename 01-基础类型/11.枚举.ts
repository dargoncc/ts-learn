// enum 枚举

// 以前写法

let obj = {
    red: 0,
    green: 1,
    blue: 2
}

// 枚举 值默认从0开始
enum Color {
    red,
    green,
    blue
}

console.log(Color.red)
console.log(Color.green)
console.log(Color.blue)

// 增长枚举
enum Color1 {
    red = 1,
    green,
    blue
}

console.log(Color1.red)
console.log(Color1.green)
console.log(Color1.blue)

// 字符串枚举 : 由于字符串枚举没有自增长的行为，字符串枚举可以很好的序列化。
enum types {
    Red = 'red',
    Green = 'green',
    Blue = 'blue',
}

// 异构枚举 : 枚举可以混合字符串和数字成员
enum isTypes {
    No = 'no',
    Yes = 1
}

// 接口枚举
enum Types {
    yyds,
    dddd
 }
 interface enumType { 
    red:Types.yyds
 }

 let enumTypeObj : enumType = {
    red:Types.yyds
 }


// const 枚举
//  const 声明的枚举会被编译成常量
// 普通声明的枚举编译完后是个对象

// 反向映射