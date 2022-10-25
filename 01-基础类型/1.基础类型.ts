// 字符串类型

const aStr  :string = 'ts'

const webStr :string = `web ${aStr}`

// 数字类型

const num : number = 1

const notNum : number = NaN // not a number

const octal : number = 0o744 // 八进制

const DecimalNum : number = 6 // 十进制

const hex : number = 0xf00d // 十六进制

// 布尔类型

const isPerson : boolean = false

const isFruit : boolean = Boolean(1)


// 空值类型

function voidFn() : void {
  console.log('test void function');

}

const _undefined : void = undefined
// tips ：在严格模式下 不可以将 null 分配给 void

// null 和 undefined 类型

const n : null = null

const _u : undefined = undefined
