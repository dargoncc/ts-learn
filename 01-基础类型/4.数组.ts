// 普通声明
let arr : number[] = [1,23,4]
let arr1 : string[] = ['1','23','4']
let arr2 : boolean[] = [true, false]
let arr3 : any[] = [1,'2',true]

// 泛型
let arr4 : Array<number> = [1, 2,3,4]
let arr5 : Array<string> = ['1','2']

console.log(arr4, arr5);

// 多维数组
let arr6:number[][] = [[],[],[]]
let arr7: Array<Array<number | string>> = [[123],[345, '456']]

// 类数组

function arr8(...args: any): void {
  console.log(arguments);
  let arr : IArguments = arguments
}

arr8(4,5,6)

//其中 IArguments 是 TypeScript 中定义好了的类型，它实际上就是：
// interface IArguments {
//   [index: number]: any;
//   length: number;
//   callee: Function;
//   }
