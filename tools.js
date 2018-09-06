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
/**
 * @Description: 设置cookie
 * @author lan
 * @date 2018/9/6
 * @params {key:名字,value:值,expires:时间}
*/
function setCookie(key,value,expires){
    var date = new Date()
    date.setDate(date.getDate()+expires)
    document.cookie = key + '=' + value + ';expires=' + date;
    console.log(document.cookie);
}
/**
 * @Description: 获取cookie
 * @author lan
 * @date 2018/9/6
 * @params {key:获取的key}
*/
function getCookie(key){
    var str = document.cookie.split('; ')
    for (var i=0;i<str.length;i++){
        var arr = str[i].split('=')
        if (arr[0] === key){
            return arr[1]
        }
    }
    return ''
}
/**
 * @Description: 删除cookie
 * @author lan
 * @date 2018/9/6
 * @params {key:删除的key}
*/
function deleteCookie(key){
    document.cookie = key + '=' + '' + ';expires='+ -1;
}
/**
 * @Description: 存储localStorage
 * @author lan
 * @date 2018/9/6
 * @params {key:存储的key,value:存储的value}
*/
function setItem(key,value) {
    if (window.localStorage){
        localStorage.setItem(key,JSON.stringify(value))
    }
}
/**
 * @Description: 获取localStorage
 * @author lan
 * @date 2018/9/6
 * @params {key:获取的key}
*/
function getItem(key){
    if (window.localStorage){
        return JSON.parse(localStorage.getItem(key || []))
    }
    return ''
}
/**
 * @Description: 删除localStorage
 * @author lan
 * @date 2018/9/6
 * @params {key:删除的key}
*/
function deleteItem(key){
    if (window.localStorage){
        localStorage.removeItem(key)
    }
}
/**
 * @Description: 格式化时间戳
 * @author lan
 * @date 2018/9/6
 * @params {date:时间戳}
*/
function timestamp(date){
    var d = new Date()
    d.setTime(date)
    var Y = d.getFullYear()
    var M = d.getMonth()+1
    var D = d.getDate()
    var h = d.getHours()
    var m = d.getMinutes()
    var s = d.getSeconds()
    return Y + '年' + M + '月' + D + '日'
}
/**
 * @Description: 封装ajax
 * @author lan
 * @date 2018/9/6
 * @params {get-->params:url地址,callback回调}
 * @params {post-->url:url地址,data参数}
*/
var ajax = {
    get: function (params) {
        var url = params.url
        var callback = params.success
        if (window.XMLHttpRequest) {
            var oAjax = new XMLHttpRequest()
        } else {
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
        oAjax.open('get', url, true)
        oAjax.send()
        oAjax.onreadystatechange = function () {
            if (oAjax.readyState == 4 && (oAjax.status == 200 || oAjax.status == 304)) {
                callback(JSON.parse(oAjax.responseText))
            }
        }
    },
    post: function (url,data) {
        if (window.XMLHttpRequest) {
            var oAjax = new XMLHttpRequest()
        } else {
            var oAjax = new ActiveXObject("Microsoft.XMLHTTP");
        }
    }
}
