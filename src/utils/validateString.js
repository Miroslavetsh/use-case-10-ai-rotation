export default function validateString({ inputString, maxLength }) {
  const result = {
    lengthIsValid: inputString.length <= maxLength,
    hasLowerCase: /[a-z]/.test(inputString),
    hasUpperCase: /[A-Z]/.test(inputString),
    hasDigit: /\d/.test(inputString),
    hasSpecialChar: /[!\"#$%&'()*+,\-./:;<=>?@\\[\\\]^_`{|}~]/.test(inputString),
    hasNoWhitespace: !/\s/.test(inputString),
  }
  return result
}
