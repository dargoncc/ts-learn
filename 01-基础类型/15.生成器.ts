// 1. 生成器  用法一样

function* generate() {
    yield Promise.resolve('dragon') // 可以同步，异步执行顺序和定义一样
    yield 'zz'
    yield 'ss'
}

const man = generate()
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
