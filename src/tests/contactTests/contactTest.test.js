const contactdetails = require("./contactTest");

test("check valid name and email", () => {
    expect(contactdetails(["tiisetso"])).toBe(false)
})