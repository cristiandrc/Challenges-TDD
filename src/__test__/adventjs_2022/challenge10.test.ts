import { checkJump } from "../../adventjs_2022/challenge10";

describe(`the jump of papanoel's sleigh`, () => {
  test(`Test: Type`, () => {
    expect(typeof checkJump([1, 3, 8, 5, 2])).toEqual('boolean')
  })

  test(`Test: checkJump([1, 3, 8, 5, 2])= true`, () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBeTruthy()
  })

  test(`Test: checkJump([1, 7, 3, 5, 4])= false`, () => {
    expect(checkJump([1, 7, 3, 5, 4])).toBeFalsy()
  })

  test(`Test: checkJump([1, 3, 8, 5, 4, 4])= true`, () => {
    expect(checkJump([1, 3, 8, 5, 4, 4])).toBeTruthy()
  })

  test(`Test: checkJump([5, 3, 1])= false`, () => {
    expect(checkJump([5, 3, 1])).toBeFalsy()
  })

  test(`Test: checkJump([5, 2, 5])= true`, () => {
    expect(checkJump([5, 2, 5])).toBeTruthy()
  })
})