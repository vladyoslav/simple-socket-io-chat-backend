export const validateString = (string: string): string => {
  return string.replace(/\s+/g, ' ').trim()
}
