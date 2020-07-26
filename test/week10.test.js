const { sumDigits, createRange, getScreentimeAlertList, hexToRGB, findWinner } = require("../challenges/week10");

describe("sumDigits", () => {
    test("it throws an error if not passed a number", () => {
        expect(() => {
            sumDigits();
        }).toThrow("n is required");
    });

    test("takes a number and returns the sum of all its digits", () => {
        const result = sumDigits([2, 3, 4]);
        const expected = 9;
        expect(result).toBe(expected);
    });
   
    describe("createRange", () => {
        test("it throws an error if start is not provided", () => {
            expect(() => {
                createRange(undefined, 7, 2);
            }).toThrow("start is required");
        });
         test("it throws an error if end is not provided", () => {
                expect(() => {
                    createRange(1, undefined, 3);
                }).toThrow("end is required");
            });

         test("returns array with range of numbers", () => {
                expect(createRange(3, 9, 2)).toEqual([3, 5, 7, 9]);
                expect(createRange(1, 16, 5)).toEqual([1, 6, 11, 16]);
            });
        });

    describe ("getScreentimeAlertList", () => {
        test("it throws an error if users is not provided", () => {
            expect(() => {
                getScreentimeAlertList();
            }).toThrow("users is required");
    });

        test("it thrown an error if date is not provided", () => {
            expect(() => {
                getScreentimeAlertList("beth_1234");
            }).toThrow("date is required");
        });
    
        test("The function should return an array of usernames of users who have used more than 100 minutes of screentime for a given date.", () => {
            const users = [
                {
                    username: "beth_1234",
                    name: "Beth Smith",
                    screenTime: [
                        { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40 } },
                        { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31 } },
                        { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19 } },
                        { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61 } },
                        { date: "2019-06-15", usage: { twitter: 50, instagram: 42, facebook: 32 } },
                    ]
                },
                {
                    username: "sam_j_1989",
                    name: "Sam Jones",
                    screenTime: [
                        { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 } },
                        { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 } },
                        { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 } },
                        { date: "2019-06-15", usage: { mapMyRun: 0, whatsApp: 25, facebook: 40, safari: 50 } },
                    ]
                },
            ]
    
            expect(getScreentimeAlertList(users, "2019-05-02")).toEqual(["beth_1234"]);
            expect(getScreentimeAlertList(users, "2019-06-04")).toEqual([]);
            expect(getScreentimeAlertList(users, "2019-06-15")).toEqual(["beth_1234", "sam_j_1989"]);
        });
    });
    describe("hexToRGB", () => {
        test("It throws an error if hexStr is not provided", () => {
            expect(() => {
                hexToRGB();
            }).toThrow("hexStr is required");
        });
           
        test("it transforms the hex code into an RGB code format", () => {
            expect(hexToRGB('#AABBCC')).toEqual([170, 187, 204]);
            expect(hexToRGB('#DDEEFF')).toEqual([221, 238, 255]);
        });
    });
    describe("findWinner", () => {
        const boards = [
           [
             ["X",  "0",  "X"],
             ["X", null,  "0"],
             ["X", null,  "0"]
           ],
           [
             ["0",  "X", null],
             ["X",  "0", null],
             ["X", null,  "0"]
           ],
           [
             ["X",  "X",   "X"],
             ["0",  null, null],
             ["X",  "0",   "0"]
           ],
           [
             ["X",  "0",  "X"],
             ["X",  "X",  "0"],
             ["0",  "X",  "0"]
           ], 
           [
             [null,  null,  null],
             [null,  null,  null],
             [null,  null,  null]
           ]];
        test("It throws an error if board is not provided", () => {
            expect(() => {
                findWinner();
            }).toThrow("board is required");
        });
           
        test("It gets the winner", () => {
            expect(findWinner(boards[0])).toEqual("X");
            expect(findWinner(boards[1])).toEqual("0");
            expect(findWinner(boards[2])).toEqual("X");
            expect(findWinner(boards[3])).toEqual(null);
            expect(findWinner(boards[4])).toEqual(null);
        });
    });
})