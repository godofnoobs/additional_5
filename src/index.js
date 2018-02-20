'use strict'
module.exports = function check(str, bracketsConfig) {
//function check(str, bracketsConfig) {
    var left = []
    var right = []
    var stack = [];
    
    for (var i in bracketsConfig) {
        left.push(bracketsConfig[i][0]);
        right.push(bracketsConfig[i][1]);
    }

    for (var i = 0; i < str.length; i++) {

        if (left.indexOf(str[i]) != -1) {
            if ((right.indexOf(str[i]) != -1) && (stack.length%2 != 0)) {
                stack.pop();
                continue;
            }
            stack.push(str[i]);
        }
        else if (right.indexOf(str[i]) != -1) {
            var opened = right.indexOf(str[i]);
            if ((stack[stack.length-1] != left[opened]) || (stack.length == 0))
                return false;
            else stack.pop();
        }
    }
    if (stack.length)
        return false;
    return true;
}

//var config = [['(', ')']];
//alert(check('())(', config));

