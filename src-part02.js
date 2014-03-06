// Returns a string that concatenates each string from the array separated by 
// the given delimeter.
// e.g. join(['one', 'two', 'three'], ' and ') 
// returns: 'one and two and three'
var join = function(arr, delimiter){
    delimiter===undefined?delimiter='':delimiter=delimiter;
    
    var output = '';
    for(var i=0; i<arr.length; i++){
        // output+=arr[i]+delimiter;
        i===arr.length-1?output=output+=arr[i]:output+=arr[i]+delimiter;
    }
    typeof delimiter !== 'string'?output =false :output=output;
    return output;
};