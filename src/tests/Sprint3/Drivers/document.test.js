import { render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";

const tests = require("../Stubs/Document");

const addDocument = tests[0];

const documents = [{ description: "test pdf document", name: "test.pdf", poster: "tiisetso"}]

afterEach(() => {
    cleanup();
})


test("tries to add a new document", () => {
    expect(addDocument(documents, { description: "test 2", name: "test2.pdf", poster: "bob" })).toStrictEqual([{ description: "test pdf document", name: "test.pdf", poster: "tiisetso" }, { description: "test 2", name: "test2.pdf", poster: "bob" }])
})

test("fail to add a new document", () => {
    expect(addDocument(documents, { description: "test 2", name: "", poster: "bob" })).toStrictEqual("No new document was added to the documents")
})