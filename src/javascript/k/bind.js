// if (!Function.prototype.bind) {}
Function.prototype.bind = function(context) {
    if (arguments.length < 2 && context == void 0)
        return this;
    var __method = this,
        args = [].slice.call(arguments, 1);
    return function() {
        //将args与arguments合并
        //arguments 为返回function的新的arguments
        return __method.apply(context, args.concat.apply(args, arguments));
    }
}

var bind = function(bind) {
    return {
        bind: bind.bind(bind),
        call: bind.bind(bind.call),
        apply: bind.bind(bind.apply)
    }
}(Function.prototype.bind);


function list() {
    return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
//  Create a function with a preset leading argument
var concat = bind.apply([].concat);
var a = [1,[2,3],4];
var b = [4,3];
console.log(concat(a,b));