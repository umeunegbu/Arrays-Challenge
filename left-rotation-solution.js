function rotateLeft(d, arr) {

    const arrCopy = [...arr];

    for(let i=d; i<arr.length; i++){
        arr[i-d] = arr[i];
    }      

    for(let i=0; i<d; i++){
        arr[arr.length-d+i] = arrCopy[i];
    }    

    return arr;
}
module.exports = {rotateLeft};
