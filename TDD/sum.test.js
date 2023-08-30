
const tests=require("./sum")
test('adds 1+2 to equal 3',()=>{
    expect(tests.sum(1,2)).toBe(3);
})

test('Capitalize ahmed to AHMED',()=>{
    expect(tests.capitalize("ahmed")).toEqual("AHMED")
})

test('Reverse ahmed to demha',()=>{
    expect(tests.reversestring("ahmed")).toEqual("demha")
})