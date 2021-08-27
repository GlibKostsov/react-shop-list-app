import classes from './ProductItemForm.module.css'
import Input from '../../UI/Input'

const ProductItemForm = (props) => {
  return (
    <form className={classes.form}>
      <Input
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
