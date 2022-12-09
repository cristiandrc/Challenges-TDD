import { distributeGifts } from "../../adventjs_2022/challenge3";

describe('How many boxes can Santa Claus carry?', () => {
  test("Test: Type", () => {
    expect(typeof distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])).toEqual('number')
  })

  test('Test: distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])', () => {
    expect(distributeGifts(["book", "doll", "ball"], ["dasher", "dancer"])).toBe(2)
  })


  test(`Test: it should return 0 if reindeers can't carry any pack: distributeGifts(['videogames', 'console'], ['midu'])`, () => {
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
  })
})