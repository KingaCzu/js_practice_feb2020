const { sumMultiples, isValidDNA, getComplementaryDNA, isItPrime, areWeCovered, createMatrix } = require("../challenges/week9");
describe("sumMultiples", () => {
    test("it throws an error if not passed an array", () => {
        expect(() => {
            sumMultiples();
        }).toThrow("an Array is required");
    });

    test("it returns the sum of any numbers that are  multiple of 3 or 5", () => {
        const result = sumMultiples([1, 3, 5]);
        const expected = 8;
        expect(result).toBe(expected);
    });
    test("it works ok with decimal numbers", () => {
        const result = sumMultiples([1, 3, 5.0, 2, 12, 10]);
        const expected = 30;
        expect(result).toBe(expected);
    });
    test("return 0 if there are no multpiples of 3 or 5", () => {
        expect(sumMultiples([1, 2, 8, 13, 7])).toBe(0);
    });
});

describe("isValidDNA", () => {
    test("it throws an error if not passed a string", () => {
        expect(() => {
            isValidDNA();
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(1);
        }).toThrow("str is required");
        expect(() => {
            isValidDNA(["C", "G", "T", "A"]);
        }).toThrow("str is required");

    });
    test("returns true if contains characters C, G, T or A only", () => {
        expect(isValidDNA("CGTA")).toBe(true);
        expect(isValidDNA("CGTACGTA")).toBe(true);
        expect(isValidDNA("CTA")).toBe(true);
        expect(isValidDNA("TAAGG")).toBe(true);
    });
    test("returns false if contains characters other than C, G, T or A", () => {
        expect(isValidDNA("CGTAH")).toBe(false);
        expect(isValidDNA("CGSTACGTA")).toBe(false);
        expect(isValidDNA("K")).toBe(false);
    });

    describe("getComplementaryDNA", () => {
        test("it throws an error if not passed a string", () => {
            expect(() => {
                getComplementaryDNA();
            }).toThrow("str is required");
            expect(() => {
                getComplementaryDNA(1);
            }).toThrow("str is required");

        });
        test("return a string of the complementary base pairs", () => {
            expect(getComplementaryDNA("ACTG")).toBe("TGAC");
        });
        test("return a string of the complementary base pairs", () => {
            expect(getComplementaryDNA("ACTGTGAC")).toBe("TGACACTG");
        });

        describe("isItPrime", () => {
            test("it throws an error if not passed a number", () => {
                expect(() => {
                    isItPrime();
                }).toThrow("n is required");
                expect(() => {
                    isItPrime("Hello");
                }).toThrow("n is required");
            });
            test("return true if it is a prime number", () => {
                expect(isItPrime(2)).toBe(true);
                expect(isItPrime(3)).toBe(true);
            })
            test("return false if it is not a prime number", () => {
                expect(isItPrime(1)).toBe(false);
                expect(isItPrime(0)).toBe(false);
            });

            describe("createMatrix", () => {
                it("returns a matrix of 1 * 1 when passed 1", () => {
                    const result = createMatrix(1, "foo");
                    const expected = [["foo"]];
                    expect(result).toEqual(expected);
                });
                test("returns a matrix of 3 * 3 when passed 3", ()=>{
                     expect(createMatrix(3,"foo")).toEqual(
                    [
                    ["foo", "foo", "foo"],
                    ["foo", "foo", "foo"],
                    ["foo", "foo", "foo"]
                    ])
                });
                test("returns a matrix of 2 * 2 when passed 2", ()=>{
                    expect(createMatrix(2, "boo")).toEqual(
                        [
                        ["boo", "boo"],
                        ["boo", "boo"],
                        ])
                })
            });

            describe("areWeCovered", () => {
                test("it returns false if there are no staff at all", () => {
                    expect(areWeCovered([], "Sunday")).toBe(false);
                    expect(areWeCovered([], "Monday")).toBe(false);
                    expect(areWeCovered([], "Tuesday")).toBe(false);
                    expect(areWeCovered([], "Wednesday")).toBe(false);
                    expect(areWeCovered([], "Thursday")).toBe(false);
                    expect(areWeCovered([], "Friday")).toBe(false);
                    expect(areWeCovered([], "Saturday")).toBe(false);
                });
                test("returns false if there are staff but < 3 are not scheduled to work", () => {
                    const staff = [
                        { name: "Gary", rota: ["Monday", "Tuesday"] },
                        { name: "Paul", rota: ["Monday", "Tuesday"] },
                        { name: "Sally", rota: ["Monday", "Tuesday"] },
                        { name: "Jess", rota: ["Monday", "Tuesday"] },
                    ];
                    expect(areWeCovered(staff, "Wednesday")).toBe(false);
                });
            });
        });
    });
});
