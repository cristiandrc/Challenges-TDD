import { checkPart } from "../../adventjs_2022/challenge8";

describe('We need a mechanic', () => {
  test('Test: Type', () => {
    expect(typeof checkPart('uwu')).toEqual('boolean')
  })

  test('Test: checkPart("uwu")', () => {
    expect(checkPart('uwu')).toBeTruthy()
  })

  test('Test: checkPart("miidim")', () => {
    expect(checkPart('miidim')).toBeTruthy()
  })

  test('Test: checkPart("midu")', () => {
    expect(checkPart('midu')).toBeFalsy()
  })

  test('Test: checkPart("yolooloy")', () => {
    expect(checkPart('yolooloy')).toBeTruthy()
  })
})