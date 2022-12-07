import { wrapping } from '../../adventjs_2022/challenge1'

describe('Automatizando envolver regalos de navidad!', () => {
  test('test: Return type', () => {
    expect(Array.isArray(wrapping([]))).toBeTruthy()
  })

  test('Test: Wrapping(["cat","game","socks"])', () => {
    expect(wrapping(["cat", "game", "socks"])).toEqual([
      "*****\n*cat*\n*****", "******\n*game*\n******", "*******\n*socks*\n*******"
    ])
  })

  test('Test: Wrapping(["midu"])', () => {
    expect(wrapping(["midu"]))
      .toEqual(["******\n*midu*\n******"])
  })
})