'use strict'
//module.exports = function check(str, brackets) {
function check(str, brackets) {
    var stack = [];
    var reverseStack = [];
    var singleStack = [];
    var br = bracketsConfig(brackets);
    var left = br[0];
    var right = br[1];
    var single = br[2];
    var singleCount = 0;
    var sc = [];
    var scc = [];
    for (var i in single) {
        sc.push(0);
        sc.push(0);
    }

    for (var i = 0; i < str.length; i++) {

        if (left.indexOf(str[i]) !== -1) 
            stack.push(str[i]);
        else if (right.indexOf(str[i]) !== -1) {
            var opened = right.indexOf(str[i]);
            if ((stack[stack.length-1] !== left[opened]) || (!stack))
                return false;
            for (var k in single)
                scc[k] = 0;
            for (var j = i; j => 0; j--) {
                if (single && single.indexOf(str[j]) !== -1)
                    scc[single.indexOf(str[j])] += 1;
                else if (str[i] === stack[stack.length-1]) {
                    for (var k in single)
                        if (scc[k]%2)
                            return false;
                }
                    break;
            }
            stack.pop();
        }
        else if (single && single.indexOf(str[i]) !== -1) {
            sc[single.indexOf(str[i])] += 1;
            if (!singleStack)
                singleStack.push(str[i]);
            else {
                if (singleStack[singleStack.length-1] === str[i]) {
                    reverseStack = [];
                    for (var j = i-1; j=>0; j--) {
                        console.log(str[j]);
                        if (right.indexOf(str[j]) != -1) {
                            alert(100000000000);
                            reverseStack.push(str[j])}
                        else if (left.indexOf(str[j]) != -1) {
                            var closedIndex = right.indexOf(reverseStack[reverseStack.length - 1]);
                            var opened = left[closedIndex];
                            if (str[j] == opened)
                                reverseStack.pop();
                        }
                        else if (single.indexOf(str[j]) != -1) {
                            if (reverseStack.length) {
                                //console.log(right);
                                //console.log(reverseStack);
                                //console.log(str.slice(j, i-j))
                                return false;
                            }
                            singleStack.pop();
                            break;
                        }
                        //console.log(reverseStack);
                    }
//                    singleStack.pop();
                }
                else
                    singleStack.push(str[i]);
                }       
        }
    }
    console.log(singleStack);
    if (stack.length > 0 || singleStack.length > 0)
        return false;
    for (var i in sc)
        if (sc[i]%2)
            return false;
    return true;
};

function bracketsConfig(arr) {
    var left = [];
    var right = []
    var single = [];
    for (var i in arr) {
        if (arr[i][0] === arr[i][1])
            single.push(arr[i][0])
        else {
            left.push(arr[i][0]);
            right.push(arr[i][1]);
        }
    }
    return [left, right, single]
}

var config1 = [['(', ')'], ['|', '|']];
var inp1 = '|(|)';
var config2 = [['(', ')'], ['|', '|']];;
var inp2 = '|()|';
var inp3 = '||';

alert(check(inp1, config1));
