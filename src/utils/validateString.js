export default function validateString({ inputString, maxLength }) {
  const pattern = new RegExp(
    '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[!"#$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~])[A-Za-z\\d!"#$%&\'()*+,-./:;<=>?@\\[\\]^_`{|}~]{1,' +
      maxLength +
      '}$',
  )

  return pattern.test(inputString)
}
