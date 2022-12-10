import { fitsInOneBox } from '../../adventjs_2022/challenge4'

describe('A box inside another box and another', () => {
  test('Test: Type', () => {
    expect(typeof fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }]))
      .toEqual('boolean')
  })

  test('Test: fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }]) => true', () => {
    expect(fitsInOneBox([{ l: 1, w: 1, h: 1 }, { l: 2, w: 2, h: 2 }])).toBeTruthy()
  })

  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 }) => false`, () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 }
    ])).toBeFalsy()
  })

  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 4, w: 4, h: 4 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }]) => false`, () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 4, w: 4, h: 4 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])).toBeFalsy()
  })

  test(`Test: fitsInOneBox([
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 }]) => false`, () => {
    expect(fitsInOneBox([
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ])).toBeFalsy()
  })
})