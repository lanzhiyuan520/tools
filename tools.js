/**
 * @Description: 排序
 * @author lan
 * @date 2018/9/5
 * @params {arr} Array
 * @params {type} String
*/
function sort(arr, type) {
    if (arr.length <= 1) {
        return arr
    }
    type = type || 'min'
    var min = [], max = []
    var c_num_index = Math.floor(arr.length / 2)
    var c_num = arr.splice(c_num_index, 1)[0]
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] <= c_num) {
            min.push(arr[i])
        } else {
            max.push(arr[i])
        }
    }
    if (type === 'min') {
        return sort(min, type).concat([c_num], sort(max, type))
    } else {
        return sort(max, type).concat([c_num], sort(min, type))
    }
}
/**
 * @Description: 去除字符串前后空格
 * @author lan
 * @date 2018/9/5
 * @param {str} String
*/
function trim(str){
    return str.replace(/(^\s*)|(\s*$)/g, "");
}
/**
 * @Description: 数组去重
 * @author lan
 * @date 2018/9/5
 * @param {arr} Array
*/
function repetition(arr){
    if (arr.length <= 1){
        return arr
    }
    var a = []
    for (var i = 0;i<arr.length;i++){
        if (a.indexOf(arr[i]) == -1){
            a.push(arr[i])
        }
    }
    return a
}
/**
 * @Description: 正则验证手机号
 * @author lan
 * @date 2018/9/5
 * @param {phone} Number || String
*/
function phone(p){
    var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
    if (!myreg.test(p)) {
        return false;
    } else {
        return true;
    }
}
/**
 * @Description: 随机生成[max-min]之间整数 不包括max和min
 * @author lan
 * @date 2018/9/5
 * @param {min,max} Number
*/
function random(min,max){
    return parseInt(Math.random()*(max-min+1)+min,10);
}
/**
 * @Description: 获取地址栏参数
 * @author lan
 * @date 2018/9/5
 * @params {name} String 需要获取的参数
*/
function getUrlParam(name) {
    if (window.location.href.indexOf('?') >= 0) {
        var a = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
        var t;
        var i = 0;
        var l = a.length;
        for (; i < l; i++) {
            if ((t = a[i].split('='))[0] === name) return t[1];
        }
    }
    return null;
}

