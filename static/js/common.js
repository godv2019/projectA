/**
 * Date类型添加格式化方法
 * @param format 格式化规则
 * @returns {void | string}
 */
Date.prototype.format = function(format) {
    if (format === undefined) {
        format = 'yyyy-MM-dd HH:mm:ss'
    }
    var date = {
        "M+": this.getMonth() + 1,
        "d+": this.getDate(),
        "H+": this.getHours(),
        "h+": this.getHours(),
        "m+": this.getMinutes(),
        "s+": this.getSeconds(),
        "q+": Math.floor((this.getMonth() + 3) / 3),
        "S+": this.getMilliseconds()
    }
    if (/(y+)/i.test(format)) {
        format = format.replace(RegExp.$1, (this.getFullYear() + '').substr(4 - RegExp.$1.length))
    }
    for (var key in date) {
        if (new RegExp("(" + key + ")").test(format)) {
            format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? date[key] :
                ("00" + date[key]).substr(("" + date[key]).length))
        }
    }
    return format
}

/**
 * 时间字符串转换为Unix时间戳
 * @param timeStr 时间字符串
 * @returns {number}
 */
timeStrToUnix = timeStr => {
    timeStr = timeStr.substring(0,19)
    timeStr = timeStr.replace(/-/g,'/')
    return new Date(timeStr).getTime()
}