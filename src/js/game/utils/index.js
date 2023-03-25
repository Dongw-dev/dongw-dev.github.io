/**
 * 深拷贝
 * @param {*} source 
 * @return cloneObj
 */
const deepClone = (source) => {
    // const type = obj => Object.prototype.toString.call(obj).split('')
    let cloneObj = source.constructor === Array? []:{};
    for(const keys in source) {
       if(typeof source[keys] === 'object') {
           cloneObj[keys] = deepClone(source[keys]);
       } else {
           cloneObj[keys] = source[keys];
       }
    }
    return cloneObj
}

/**
 * 获取地址栏参数
 * @param {*} url 
 */
const getQueryString = (url) => {
    url = url == null? window.location.href : url;
    const search = url.substring(url.lastIndexOf(',') + 1);
    const obj = {};
    const reg = /([^?&=]+)=([^?&=]*)/g
    search.replace(reg, (rs, p1, p2) => {
        // rs => 匹配到的结果， p[n] => 根据reg匹配到的第一个
        let key = decodeURIComponent(p1)
        let val = decodeURIComponent(p2)
        val = String(val)
        obj[key] = val;
        return rs;
    })
    return obj;
}

/**
 * 防抖
 * @param {Function} fn 
 * @param {Int} timeout 
 * @param {object} options
 * @returns {Function} _debounce
 */
const debounce = (fn, timeout, options = {
    leading: true,
    context: null
}) => {
    let timer = null;
    const _debounce = function (...args){
        if(timer) {
            clearTimeout(timer);
        }
        if(options.leading && timeout) {
            timer = setTimeout(null, timeout);
            fn.apply(options.context, args);
        } else {
            timer = setTimeout(() => {
                fn.apply(options.context, args);
                timer = null;
            }, timeout)
        }
    };
    return _debounce;
}
/**
 * 节流
 * @param {*} fn 
 * @param {*} timeout 
 * @param {*} options 
 * @returns {Function} _throttle
 */
const throttle = (fn, timeout, options = {
    leading: true, // 是否在进入时立即执行一次
    trailing: false, // 是否在最后一次额外触发
    context: null
}) => {
    let previous = new Date().getTime(); 
    let timer = null;
    const _throttle = function(...args) {
        let now = new Date().getTime();
        if(!options.leading) {
           if(timer) return
           timer = setTimeout(() => {
               fn.apply(options.context, args)
               timer = null
           }, timeout) 
        } else if(now - previous > timeout){
            fn.apply(options.context, args);
            previous = now;
        } else if(options.trailing) {
            if(timer) clearTimeout(timer);
            timer = setTimeout(() => {
                fn.apply(options.context, args)
            }, timeout) 
        }
    }
    return _throttle;
}
/**
 * 合并对象
 * @param  {...any} args 
 * @returns 
 */
function mergeOpts(...args) {
    return Object.assign({}, ...args);
}