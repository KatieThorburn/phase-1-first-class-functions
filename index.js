
function receivesAFunction (callback) {
    return callback();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Named function")
    }
}
function returnsAnAnonymousFunction() {
    return function(){
        console.log("this is an anonymous function")
    }
}