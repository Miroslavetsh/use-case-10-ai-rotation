import { render } from '@testing-library/react'

import App from './App'
import { validateString } from './utils'

test('renders learn react link', () => {
  render(<App />)
})

describe(`${validateString.name} should work with simple cases`, () => {
  const validStrings = ['Valid1!', 'v@Lid2']
  const invalidStrings = [
    'v@lid1', // Misses uppercase
    'VALID1@', // Misses lower
    'Val1d@longpasswordexceedingmaximumlength', // Too large
    'Valid1!with spaces',
    'Valid1!\tWithTab',
    'Valid1!\nWithNewLine', // ^ Spaces :(
    'Invalid', // No digits
    '1234567890', // Only digits
    '         ', // Only spaces
  ]
  const maxLength = 20

  const testValidation = ({ data, description, equalityComparison }) => {
    for (let i = 0; i < data.length; i++) {
      test(`${description} "${data[i]}"`, () => {
        const candidate = validateString({
          inputString: data[i],
          maxLength,
        })

        expect(candidate).toBe(equalityComparison)
      })
    }
  }

  testValidation({ data: validStrings, description: 'passes valid', equalityComparison: true })
  testValidation({ data: invalidStrings, description: 'omits invalid', equalityComparison: false })
})
