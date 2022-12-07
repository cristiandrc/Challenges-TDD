export const wrapping = (gifts: string[]): string[] => {
  return gifts.map((gift) => {
    let lengthGift = gift.length
    let wrapper = '*'.repeat(lengthGift + 2)
    return `${wrapper}\n*${gift}*\n${wrapper}`
  })
}