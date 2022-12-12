import { createCube } from "../../adventjs_2022/challenge6"
describe('creating christmas decorations', () => {
  test("Test: Type", () => {
    expect(typeof createCube(1)).toEqual('string')
  })

  test("Test: createCube(1)", () => {
    const expected = '/\\_\\\n\\/_/'
    expect(createCube(1)).toEqual(expected)
  })

  test("Test: createCube(3)", () => {
    const expected = '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/'
    expect(createCube(3)).toEqual(expected)
  })

  test("Test: createCube(2)", () => {
    const expected = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/'
    expect(createCube(2)).toEqual(expected)
  })
})