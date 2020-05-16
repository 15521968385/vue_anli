let name='谢敬涛';
let sum=function(num1,num2){
    return num1+num2
}
class Person{
    run(runing){
        return runing
    }
}
// 导出方式一(导出一个对象，包括变量，函数，class)
export {name,sum,Person}

// 导出方式二
export let sex = '男';
export let addr = '河源市';

// 导出方式三(export default只能导出一次)
export default {
    ji:function(num1,num2){
        return num1*num2
    },
    msg:'啦啦啦'
}

