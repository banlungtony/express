const calculator = require("./calculator")
// @ponicode
describe("calculator.plus", () => {
    test("0", () => {
        let callFunction = () => {
            calculator.plus(0, 0.0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculator.plus(-5.48, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculator.plus(-1, -100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculator.plus(0, 100)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculator.plus(10, "bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculator.plus(Infinity, Infinity)
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("calculator.minus", () => {
    test("0", () => {
        let callFunction = () => {
            calculator.minus(-10, -5.48)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            calculator.minus(0, 10)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            calculator.minus(10, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            calculator.minus(-5.48, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            calculator.minus(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            calculator.minus(NaN, NaN)
        }
    
        expect(callFunction).not.toThrow()
    })
})
