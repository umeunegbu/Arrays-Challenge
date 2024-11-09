const {matchingStrings}  = require("./sparse-arrays-solution");

describe("Testing matchingStrings Function",()=>{
    test("Should return an array of three number elements", () => {
        expect(matchingStrings(['ab','ab','abc'],['ab','abc','bc'])).toEqual([2,1,0]);
    });
    
    test("Should return an array of three number elements", () => {
        expect(matchingStrings(['aba','baba','aba','xzxb'],['aba','xzxb','ab'])).toEqual([2,1,0]);
    });
})
