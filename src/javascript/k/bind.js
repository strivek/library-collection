Function.prototype.bind = function(context) {
    if (arguments.length < 2 && context == void 0)
        return this;
    var __method = this,
        args = [].slice.call(arguments, 1);
    return function() {
        //将args与arguments合并
        //arguments 为返回function的新的arguments
        return __method.apply(context, args.concat.apply(args, arguments););
    }
}

function add() {
    console.log(arguments);
    this.name;
}
var obj = {
    name: "gaofei"
};

var returnName = add.bind(obj, 1, 2, 3);

returnName()
