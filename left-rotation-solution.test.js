const {rotateLeft} = require('./left-rotation-solution');

describe("Testing rotateLeft function", ()=>{
    test("Should return an array of 5 elements rotated 2 units to the left", ()=>{
        expect(rotateLeft(2, [1,2,3,4,5])).toEqual([3,4,5,1,2]);
    })

    test("Should return an array of 5 elements rotated 4 units to the left", ()=>{
        expect(rotateLeft(4, [1,2,3,4,5])).toEqual([5,1,2,3,4]);
    })

})
