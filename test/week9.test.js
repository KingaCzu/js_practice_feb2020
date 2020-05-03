const {sumMultiples,
    isValidDNA,
    getComplementaryDNA,
    isItPrime,
    createMatrix,
    areWeCovered,
} = require ("../challenges/week9");
describe("sumMultiples", () => {
    test("it returns the sum of any numbers that are  multiple of 3 or 5", () => {
        const result = sumMultiples ([1,3,5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
});