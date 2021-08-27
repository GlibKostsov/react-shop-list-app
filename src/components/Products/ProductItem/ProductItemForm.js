import React, { useRef, useState } from 'react'
import classes from './ProductItemForm.module.css'
import Input from '../../UI/Input'

const ProductItemForm = (props) => {
  const productAmountRef = useRef()
  const [amountIsValid, setAmountIsValid] = useState(false)

  const onFormSubmitHandler = (event) => {
    event.preventDefault()
    const enteredAmount = productAmountRef.current.value
    const enteredAmountNumber = +enteredAmount
    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false)
      return
    }
    props.onAddProduct(enteredAmountNumber)
  }

  return (
    <form className={classes.form} onSubmit={onFormSubmitHandler}>
      <Input
        ref={productAmountRef}
        label='Amount'
        input={{
          id: `amount-${props.id}`,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button>+ Add</button>
    </form>
  )
}

export default ProductItemForm
