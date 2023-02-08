type cccc = string & number // ts 自动推断为 never

function error123(message:string) : never {
    throw new Error(message);
}

function loop() :never {
    while(true) {}
}

// 案例
interface AA {
    type: 'baoan'
}

interface BB {
    type: 'caicai'
}
interface CC {
    type: 'sss'
} 

type ALL = AA | BB | CC

function handleValue(val:ALL ) {
    switch (val.type) {
        case 'baoan':
            
            break;
        case 'caicai':
            break
        
        // 当没有cc类时，代码编译错误
        // case 'sss':
        //     break
        default:
            const check : never = val
            break;
    }
}