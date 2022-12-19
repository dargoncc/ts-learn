// 内置对象， ts 帮我们定义好的对象

const reg :RegExp = /\w\d\s/

const date :Date = new Date()

const time: number = new Date().getTime()

const error: Error = new Error('错误')

// DOM 和 BOM
// https://github.com/Microsoft/TypeScript/tree/main/src/lib