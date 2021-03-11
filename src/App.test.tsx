import { calculatePurchaseTotal } from "./utils";

describe("['grapes', 1], ['apples', 0], ['peaches', 1] ]", () => {
    it("returns 12", () => {
        expect(
            calculatePurchaseTotal([
                ["grapes", 1],
                ["apples", 0],
                ["peaches", 1],
            ])
        ).toBe(12);
    });
});

describe("[ ['grapes', 1], ['apples', 1], ['peaches', 1] ]", () => {
    it("returns 15", () => {
        expect(
            calculatePurchaseTotal([
                ["grapes", 1],
                ["apples", 1],
                ["peaches", 1],
            ])
        ).toBe(15);
    });
});

describe("[ ['grapes', 2], ['apples', 2], ['peaches', 1] ]", () => {
    it("returns 16.8", () => {
        expect(
            calculatePurchaseTotal([
                ["grapes", 2],
                ["apples", 2],
                ["peaches", 1],
            ])
        ).toBe(16.8);
    });
});

describe("[ ['grapes', 3], ['apples', 5], ['peaches', 2] ]", () => {
    it("returns 36", () => {
        expect(
            calculatePurchaseTotal([
                ["grapes", 3],
                ["apples", 5],
                ["peaches", 2],
            ])
        ).toBe(36);
    });
});

describe("[ ['peaches', 7], ['grapes', 7], ['apples', 7] ]", () => {
    it("returns 85.8", () => {
        expect(
            calculatePurchaseTotal([
                ["peaches", 7],
                ["grapes", 7],
                ["apples", 7],
            ])
        ).toBe(85.8);
    });
});
