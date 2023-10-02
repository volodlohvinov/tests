import { pow } from './hw-11'

describe("Testing exponentiation", () => {
    it("throws an error when number is not correct", () => {
        const num = "6";
        const degree = 4;
        expect(() => pow(num, degree)).toThrow();
    })
    it("throws an error when degree is not correct", () => {
        const num = 6;
        const degree = 4.5;
        expect(() => pow(num, degree)).toThrow();
    })
    it("correctly calculates to a positive degree", () => {
        const num = 5;
        const degree = 2;
        expect(pow(num, degree)).toBe(25)
    });
    it("correctly calculates for degree 0", () => {
        const num = 5;
        const degree = 0;
        expect(pow(num, degree)).toBe(1)
    });
    it("correctly calculates for a negative degree", () => {
        const num = 5;
        const degree = -2;
        expect(pow(num, degree)).toBe(0.04)
    });
    it("correctly calculates for a negative number", () => {
        const num = -3;
        const degree = 3;
        expect(pow(num, degree)).toEqual(-27)
    });
    it("throws an error on a non-integer power", () => {
        const num = 5;
        const degree = 2.2;
        expect(() => pow(num, degree)).toThrow();
    });
})