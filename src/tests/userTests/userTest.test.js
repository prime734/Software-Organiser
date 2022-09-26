const tests = require("./userTest");

const deleter = tests[0];
const adder = tests[1];
const editor = tests[2];

test("tries to delete a story", () => {
    expect(deleter(['abc', 'bac', 'cab'], 'cab')).toBe(['abc', 'bac']);
})

test("tries to add a story", () => {
    expect(adder(['abc', 'bac'], 'cab')).toBe(['abc', 'bac', 'cab']);
})

test("tries to edit a story", () => {
    expect(editor(['abc', 'bac', 'cab'], 'cab', 'cas')).toBe(['abc', 'bac', 'cas']);
})