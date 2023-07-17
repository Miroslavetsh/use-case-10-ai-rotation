import React, { useState } from 'react'

import { validateString } from '../utils'

const StringValidator = () => {
  const [inputString, setInputString] = useState('')
  const [maxLength, setMaxLength] = useState(20)
  const [isValid, setIsValid] = useState(false)

  const handleValidate = (event) => {
    event.preventDefault()
    setIsValid(validateString({ inputString, maxLength }))
  }

  return (
    <div>
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
      <p>Is string valid?: {isValid.toString()}</p>
    </div>
  )
}

export default StringValidator
