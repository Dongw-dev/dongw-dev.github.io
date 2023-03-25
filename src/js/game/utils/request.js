/**
 * 使用Promise封装Fetch
 * @param {Object} options 
 * @returns 
 */
const service = (options = {
    url: '',
    methods: 'get',
    params: {}
}) => {
    return new Promise((resolve, reject) => {
        delayHandler(fetch(
            options.url
        )).then(response => {
            response.json()
        }).then(res => {
            resolve(res)
        }).catch(err => {
            reject(err)
        })
    })
}
/**
 * 超时处理
 * @param {Function} service 
 * @param {int} delay 
 * @returns 
 */
const delayHandler = (service, delay = 10000) => {
    let handler = null;
    const timeoutService = new Promise((resolve, reject) => {
        handler = ()=>{
            reject('request timeout')
        }
    })

    const promise = Promise.race([
        service,
        timeoutService
    ])

    setTimeout(() => {
        handler()
    }, delay)

    return promise
}