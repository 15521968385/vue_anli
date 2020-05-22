import axios from 'axios'
export function request(config) {
    //创建axios实例
    const instance = axios.create({
        // 一定要加http://
        baseURL: 'http://localhost:2000',
        timeout: 5000
    })
    // 请求拦截
    instance.interceptors.request.use(cf => {
        // cf请求的配置信息，必须return出去
        // console.log(cf)
        return cf
    }, err => {
        // err请求失败
        console.log(err)
    })
    instance.interceptors.response.use(result => {
        // 拿到响应的数据，并对数据做一层处理

        return result.data
    }, err => {
        console.log(err)
    })
    //return的axios实例instance就是一个promise对象，可以使用.then.catch.all方法
    return instance(config)
}

export function request2(config) {
    const instance = axios.create({
        baseURL: 'http://localhost:1000',
        timeout: 1000
    })
    instance.interceptors.response.use(result => {
        // 拿到响应的数据，并对数据做一层处理

        return result.data
    }, err => {
        console.log(err)
    })
    return instance(config)
}