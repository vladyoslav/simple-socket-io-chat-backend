import { normalizeCombiningMarks, normalizeSpace } from '@eolme/normalize'

export const validateString = (string: string): string => {
  return normalizeCombiningMarks(normalizeSpace(string.slice(0, 100)))
}
