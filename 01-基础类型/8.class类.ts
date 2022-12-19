// 定义一个类

class Person {
    // ts 需要先定义变量
    name: string
    age: number
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

new Person('多愁善感', 123)

// 定义的变量可以不用，但要赋值

class Person1 {
    // ts 需要先定义变量
    name: string
    age: number = 0
    constructor(name: string, age: number) {
        this.name = name
    }
}

// public  private protected 共有私有 受保护的
class Person2 {
    // ts 需要先定义变量
    name: string // public 默认为公有变量, 外部可以访问到
    private age: number = 0 // private 定义私有变量后 外部和继承的子类中都不存在
    protected some: any // protected 外部依然访问不到， 内部可以
    constructor(name: string, age: number, some: any) {
        this.name = name
        this.some = some
    }
}

class User extends Person2{
    constructor() {
        super('多愁善感', 23, true)
        console.log(this.some); // 可以获取some
    }
}

let p = new Person2('多愁善感', 22, true)

let duochou = new User()
duochou.some // 不可以获取受保护的属性 some

// static 静态属性和静态方法

class Person3 {
    name: string 
    private age: number = 0
    protected some: any 
    static nb : string
    constructor(name: string, age: number, some: any) {
        this.name = name
        this.some = some
        this.nb // 不可以通过this访问， 只能通过类名调用
        this.run() // 构造器中无法访问静态方法
    }
    static run() {
        this.age // 静态方法中不能调用类中的变量
        return this.aaa() // 如果两个函数都是 static 静态方法， 是可以通过this 调用
    }
    static aaa() {}
}
Person3.nb //  只能通过类名调用

// interface 定义类
interface PersonClass {
    get(type: boolean) : boolean
}
interface C {
    set(type: number) : void
}
class A {
    params: string
    constructor(params :string) {
        this.params = params
    }
}

// implements 定义多个类
// extends 继承其它类
class Man extends A implements PersonClass, C {
   
    get(type : boolean) : boolean {
        return type
    }
    set() {}
    constructor() {
        super('123')
    }
}