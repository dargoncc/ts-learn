// 迭代器 ： 可以迭代 set map， arguments nodelist
let set: Set<number> = new Set([1, 1, 2, 2, 3, 3]);

let map: Map<unknown, string> = new Map();

let Arr: number[] = [1, 2, 3];

map.set(Arr, "ss");
console.log(map.get(Arr));

// 手动实现迭代器
const each = (value: any) => {
  let It = value[Symbol.iterator]();
  let next: any = { done: false };
  while (!next.done) {
    next = It.next();
    if (!next.done) {
      console.log(next.value);
    }
  }
};

each(map);

// 迭代器语法糖  for of
// for of 对象不能用
for (const v of map) {
  console.log(v);
}

// 数组解构 : 底层调用 iterator
let [a, b, c] = [4, 5, 6];
console.log(a, b, c);

// for of 对象解构
let objiterator = {
  max: 5,
  current: 0,
  [Symbol.iterator]() {
    return {
      max: this.max,
      current: this.current,
      next() {
        if (this.current === this.max) {
          return {
            value: undefined,
            done: true,
          };
        } else {
          return {
            value: this.current++,
            done: false,
          };
        }
      },
    };
  },
};

// 可以给上方对象定义迭代器
for (let i of objiterator) {
    console.log(i);
}
// 对象的解构底层调用？
console.log({...objiterator});

