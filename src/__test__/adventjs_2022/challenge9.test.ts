import { countTime } from "../../adventjs_2022/challenge9"

describe('Crazy christmas lights', () => {
  test('Test: Type', () => {
    expect(typeof countTime([0, 1, 1, 0, 1])).toEqual('number')
  })

  test('Test: countTime([0, 1, 1, 0, 1])', () => {
    expect(countTime([0, 1, 1, 0, 1])).toEqual(7)
  })

  test('Test: countTime([0, 0, 0, 1])', () => {
    expect(countTime([0, 0, 0, 1])).toEqual(21)
  })

  test('Test: countTime([1, 0, 0, 1, 0, 0])', () => {
    expect(countTime([1, 0, 0, 1, 0, 0])).toEqual(14)
  })

  test('Test: countTime([1, 1, 1])', () => {
    expect(countTime([1, 1, 1])).toEqual(0)
  })
})