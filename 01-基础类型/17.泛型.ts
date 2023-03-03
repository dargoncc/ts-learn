// 动态类型

import { type } from "os"

// 我们定义几个函数
// function num1(a :number, b: number): Array<number> {
//     return [a, b]
// }

// function str1(a :string, b: string): Array<string> {
//     return [a, b]
// }

// 使用泛型定义

function man1<T>(a:T, b:T):Array<T> {
    return  [a, b]
}

man1(1,2)
man1('srt', 'str')
man1(true, false)
// man1(1, '1')  // 泛型不同取前面

type ASS<T> = string  | number | T

let ss : ASS<number> = 1 
let ss1 : ASS<string> = '1'
let ss2 : ASS<boolean> = true
let ss3 : ASS<undefined> = undefined

function add<T,K>(a : T, b :K): Array<T | K> {
    return [a, b]
}

add(1,true)

// 使用泛型实战 封装 简易axios
const axios = {
    get<T>(url: string):Promise<T> {
        return new Promise((resolve, reject) => {
            let xhr : XMLHttpRequest = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.onreadystatechange =() => {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText))
                }
            }
            xhr.send(null)
        })
    }
}

axios.get('').then(response => {
    
})