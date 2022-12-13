import { getGiftsToRefill } from "../../adventjs_2022/challenge7";

describe('Doing gift inventory', () => {

  test('Test: Type', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    expect(Array.isArray(getGiftsToRefill(a1, a2, a3))).toBeTruthy()
  })

  test('Test: getGiftsToRefill(a1, a2, a3)', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    expect(getGiftsToRefill(a1, a2, a3)).toEqual(['muñeca', 'pc'])
  })

  test(`Test: getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])`, () => {
    expect(getGiftsToRefill(['a', 'a'], ['b', 'b'], ['c', 'c'])).toEqual(["a", "b", "c"])
  })


  test(`Test: getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])`, () => {
    expect(getGiftsToRefill(['a', 'b'], ['c', 'd'], ['e', 'f'])).toEqual(["a", "b", "c", "d", "e", "f"])
  })
})