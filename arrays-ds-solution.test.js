const {reverseArray} = require("./arrays-ds-solution");

describe("Testing reverseArray function", () => {
    test("Should reverse an array of three elements", () => {
        expect(reverseArray([1,2,3])).toEqual([3,2,1]);
    });

    test("Should reverse an array of four elements", () => {
        expect(reverseArray([1,4,3,2])).toEqual([2,3,4,1]);
    })
})

