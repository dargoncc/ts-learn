// 元组（Tuple）是固定数量的不同类型的元素的组合。
// 元组与集合的不同之处在于，元组中的元素类型可以是不同的，而且数量固定。元组的好处在于可以把多个元素作为一个单元传递。
// 如果一个方法需要返回多个值，可以把这多个值作为元组返回，而不需要创建额外的类来表示。

let Tuple : [string, number] = ['多愁善感', 123]

Tuple[0].length // success

// Tuple[1].length // error

// 越界元组： ts 会推断出联合类型。 如上面只能是 字符串或者 数字
// Tuple.push(true) // error

Tuple.push('我越界了') // success
Tuple.push('我又越界了') // success

console.log(Tuple) // [ '多愁善感', 123, '我越界了', '我又越界了' ]
