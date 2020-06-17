const { sumDigits, createRange } = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");

    });
    test("takes a number and returns the sum of all its digits", () => {
        const result = sumDigits([1, 2, 3]);
        const expected = 6;
        expect(result).toBe(expected);
    });
    describe("createRange", () => {
        test("it throws an error if start is not provided", () => {
            expect(() => {
                createRange(undefined, 11, 2);
            }).toThrow("start is required");
        });
         test("it throws an error if end is not provided", () => {
                expect(() => {
                    createRange(3, undefined, 2);
                }).toThrow("end is required");
            });

         test("returns array with range of numbers", () => {
                expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
                expect(createRange(1, 13, 3)).toEqual([1, 4, 7, 10, 13]);
            });
        });
    })
