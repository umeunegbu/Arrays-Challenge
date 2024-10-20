function reverseArray(a) {
   
    let output = [];  

    for(let i=0; i<a.length; i++){
        output.unshift(a[i]);
    }

    return output;

}
module.exports = {reverseArray};