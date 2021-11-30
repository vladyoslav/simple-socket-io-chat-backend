export const validateString = (string: string): string => {
  return string.slice(0, 100)
    .replace(/\s+/g, ' ')
    .trim()
}
