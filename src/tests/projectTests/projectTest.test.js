const tests = require("./projectTest");

const deleter = tests[0];
const adder = tests[1];
const editor = tests[2];

test("tries to delete a project", () => {
    expect(deleter(['abc','bac','cab'], 'cab')).toBe([ 'abc','bac' ]);
})

test("tries to add a project", () => {
    expect(adder(['abc', 'bac'], 'cab')).toBe(['abc', 'bac','cab']);
})

test("tries to edit a project", () => {
    expect(editor(['abc', 'bac', 'cab'], 'cab','cas')).toBe(['abc', 'bac','cas']);
})