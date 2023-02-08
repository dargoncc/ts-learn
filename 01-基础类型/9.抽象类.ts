// abstract  抽象类

abstract class A {
    name: string
    constructor(name: string) {
        this.name = name
    }
}
new A() // 抽象类 无法被实例化

abstract class B {
    name: string
    constructor(name: string) {
        this.name = name
    }
    // abstract getName(): string { } // 抽象类定义的方法必须在派生类里实现
    abstract getName(): string // 定义了 getName 抽象方法但为实现


}

// 抽象类定义的方法必须在派生类里实现
class C extends B {
    constructor() {
        super('多愁善感')
    }

    getName() :string {
        return this.name
    }
}

let cc = new C()
cc.getName()