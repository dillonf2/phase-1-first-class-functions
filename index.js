function receivesAFunction(callback){
    return callback()
}
function returnsANamedFunction(){
     return function a(){

     } 
}


function returnsAnAnonymousFunction(){
    return function(){

    }
}