import { getMaxGifts } from "../../adventjs_2022/challenge5";

describe(`optimizing santa's trips`, () => {
  test('Test: type', () => {
    expect(typeof getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toEqual('number')
  })

  test('Test: getMaxGifts([12, 3, 11, 5, 7], 20, 3)', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
  })

  test('Test: getMaxGifts([50, 70, 30], 100, 2)', () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
  })

  test('Test: getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)', () => {
    expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115)
  })
})