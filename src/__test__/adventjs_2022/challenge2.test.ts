import { countHours } from "../../adventjs_2022/challenge2"

describe("Nobody wanna make extra hours", () => {
  test("Test: Type", () => {
    expect(typeof countHours(2022, ['01/06', '04/01', '12/25'])).toEqual('number')
  })

  test("Test: countHours(2023, ['01/06', '04/01', '12/25']) ", () => {
    expect(countHours(2023, ['01/06', '04/01', '12/25'])).toBe(4)
  })

  test("Test: countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25']) ", () => {
    expect(countHours(1985, ['01/01', '01/06', '02/02', '02/17', '02/28', '06/03', '12/06', '12/25'])).toBe(10)
  })

})