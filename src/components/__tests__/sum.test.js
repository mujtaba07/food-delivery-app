
import { sum } from "../sum.js"
test("sum function should calculate the sum of 2 functions",()=> {
   let result =  sum(1,2)
   expect(result).toBe(3)
})
