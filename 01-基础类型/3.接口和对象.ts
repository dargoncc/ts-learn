// js 方式
// let obj = { name: '我很大' }
interface person {
  readonly name : string,
  age?: number, // ? 可选
  [propName: string]: any,
  cb(): void
}

let obj : person = { name: '我' }
console.log(obj);

let obj1 : person = { name: '你', age: 18 }
console.log(obj1);

let obj2 :person = { name: '1', abc: '123' }

obj.name = '123'

interface school extends person {
  school: string
}

let xiaoming : school  = {
  name: 'xiaoming',
  age: 16,
  school: '新东方',
  cb: () => {}
}
