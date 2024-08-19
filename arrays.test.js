import { describe, it, expect } from "vitest";

import { returnElementAtPosition } from "./arrays";

describe("Arrays: return element at position", () => {
    it.skip("given inputs of [1,2,3] and 0 should return 1", () => {
        expect(returnElementAtPosition([1,2,3], 0)).toEqual(1);
    });

    it.skip("given inputs of ['a','b','c'] and 2 should return c", () => {
        expect(returnElementAtPosition(['a','b','c'], 2)).toEqual('c');
    });
});


describe("Arrays: removeLastElement", () => {
    it.skip("given an array of [1,2,3] should return an output of [1,2]", () => {
        expect(removeLastElement([1,2,3])).toEqual([1,2]);
    });

    it.skip("given an array of [1,2,3,4,5] should return an output of [1,2,3,4]", () => {
       // write the test yourself
    });
});



