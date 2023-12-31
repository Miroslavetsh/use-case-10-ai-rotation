import React, { useState } from 'react'

import { validateString } from '../utils'

const StringValidator = () => {
  const [inputString, setInputString] = useState('')
  const [maxLength, setMaxLength] = useState(20)
  const [validationResult, setValidationResult] = useState(
    validateString({ inputString, maxLength }),
  )

  const handleValidate = (event) => {
    event.preventDefault()
    setValidationResult(validateString({ inputString, maxLength }))
  }

  const getResultClass = (check) => (check ? 'valid' : 'invalid')

  return (
    <div className='validator'>
      <h2>String Validator</h2>
      <form onSubmit={handleValidate}>
        <label>
          Enter string:
          <input type='text' value={inputString} onChange={(e) => setInputString(e.target.value)} />
        </label>
        <label>
          Enter maximum length:
          <input type='number' value={maxLength} onChange={(e) => setMaxLength(e.target.value)} />
        </label>
        <input type='submit' value='Validate' />
      </form>
      <h3>Validation Result:</h3>
      <p className={getResultClass(validationResult.lengthIsValid)}>
        Length is valid: {validationResult.lengthIsValid.toString()}
      </p>
      <p className={getResultClass(validationResult.hasLowerCase)}>
        Has lowercase: {validationResult.hasLowerCase.toString()}
      </p>
      <p className={getResultClass(validationResult.hasUpperCase)}>
        Has uppercase: {validationResult.hasUpperCase.toString()}
      </p>
      <p className={getResultClass(validationResult.hasDigit)}>
        Has digit: {validationResult.hasDigit.toString()}
      </p>
      <p className={getResultClass(validationResult.hasSpecialChar)}>
        Has special character: {validationResult.hasSpecialChar.toString()}
      </p>
      <p className={getResultClass(validationResult.hasNoWhitespace)}>
        Has no whitespace: {validationResult.hasNoWhitespace.toString()}
      </p>
    </div>
  )
}

export default StringValidator
