/**
 *
 * clamp a value(v) to a new range(d-c)
 *
 * ex:
 * v = 50
 * a = 0
 * b = 100
 * c = 0
 * d = 1
 *
 * returns 0.5, cause, v=50 is a half of (b-a that is 100)
 *
 * @param v a value inside a,b range
 * @param a first start range
 * @param b first end range
 * @param c second start range
 * @param d second end range
 *
 * @author Bruno Andrade
 *
 * @returns number
 */
export const clampValue = (
  v: number,
  a: number,
  b: number,
  c: number,
  d: number,
): number => {
  const f = v / Math.abs(b - a)
  return c + Math.abs(d - c) * f
}

export const decToHex = (number: number) => {
  const rgbAlpha = Math.round(clampValue(Math.round(number), 0, 100, 0, 255))
  const hexaAlpha = rgbAlpha.toString(16).toUpperCase()
  return hexaAlpha.padStart(2, '0')
}
