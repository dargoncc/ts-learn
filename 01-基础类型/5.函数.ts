const fn = function (name :string ,age?: number) : string {
  return name + age
}

let a = fn('张三', 100)
console.log(a);

// 不传时为undefined
let b = fn('张三')
console.log(b);


const fn1 = function (name :string ,age: number = 30) : string {
  return name + age
}
let c = fn1('张三')
console.log(c);
