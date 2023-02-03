const { returnTwo, greeting, add, subtract, multiply, divide } = require('./functions')

describe("returnTwo function", () => {
    test("returnTwo function should return 2", () => {
        const result = returnTwo()
        expect(result).toEqual(2)
    })
})

describe("greeting function", () => {
    test("should return Hello James", () => {
        const result = greeting("James")
        expect(result).toEqual("Hello James")
    })
    test("should return Hello Jill", () => {
        const result = greeting("Jill")
        expect(result).toEqual("Hello Jill")
    })
})

describe("add function", () => {
    test("should return 3", () => {
        const result = add(1, 2)
        expect(result).toEqual(3)
    })
    test("should return 14", () => {
        const result = add(5, 9)
        expect(result).toEqual(14)
    })
})

describe("testing challenge functions", () => {
    test("SUBTRACT: should return 2", () => {
        const result = subtract(4, 2)
        expect(result).toEqual(2)
    })
    
    test("MULTIPLY: should return 6", () => {
        const result = multiply(3, 2)
        expect(result).toEqual(6)
    })
    
    test("DIVIDE: should return 4", () => {
        const result = divide(8, 2)
        expect(result).toEqual(4)
    })
})

