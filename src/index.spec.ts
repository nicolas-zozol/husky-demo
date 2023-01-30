function sum(a: number, b: number): number {
  return a + b
}

describe('sum module', () => {
  test('basic', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('basic again', () => {
    expect(sum(1, 2)).toBe(3)
  })
})
