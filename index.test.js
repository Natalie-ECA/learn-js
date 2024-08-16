import { describe, it, expect } from "vitest";

import { hello } from "./index";

describe("hello", () => {
    it("should return greeting message", () => {
        expect(hello()).toEqual('Hello, world!');
    });
});
