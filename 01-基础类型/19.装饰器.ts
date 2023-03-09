// 目标
// 1. 类装饰器 classDecorator
// 2. 属性装饰器 propertyDecorator
// 3. 参数装饰器 parameterDecorator
// 4. 方法装饰器 methodDecorator propertyDescriptor
// 5. 装饰器工厂
// 6. import 'reflect-metadata'
// 7. axios  -> 可以在

import axios from 'axios'
import 'reflect-metadata'

// tsconfig.json -> 17\18（experimentalDecorator、emitDecoratorMetadata） 注释打开 才能写装饰器语法
// 1. 类装饰器 classDecorator
const Base = (name?: string) => {
    // console.log(target)
    // target.prototype.dragon = 'dragon'
    // target.prototype.getData = () => {
    //     console.log('getData');
    // }
    // 函数柯里化: 解决参数不固定的问题
    const fn :ClassDecorator = (target) => {
        target.prototype.dragon = name ?? 'dragon'
        target.prototype.getData = () => {
            console.log('getData');
        }
    }
    return fn
}

//  方法装饰器 methodDecorator
const Get = (url: string) => {
    const fn :MethodDecorator = (target, key, descriptor: PropertyDescriptor) => {
        // console.log(target, key, descriptor);
        const _key =  Reflect.getMetadata('key', target)
        axios.get(url).then(response => {
            descriptor.value(_key ? response.data[_key] :response.data)
        })
    }
    return fn
}

// 参数装饰器
const Result = () => {
    const fn :ParameterDecorator = (target, key, index) => {
        // console.log(target, key, index)
        Reflect.defineMetadata('key','result', target)
    }
    return fn
}

// 属性装饰器
const Name:PropertyDecorator = (target, key) => {
    console.log(target, key);
}

@Base() // 一般以@开头 ，首字母大写
class HTTPS{
    @Name
    dragon: string
    constructor() {
        this.dragon = 'dragon'
    }
    @Get('https://api.apiopen.top/api/getHaoKanVideo?page=1&count=10') // 方法装饰器
    getList(@Result() data: any) {
        // console.log(data.result.list);
        // console.log(data);
        
    }
}
const http = new HTTPS() as any

// http.getData()
// console.log(http.dragon);
