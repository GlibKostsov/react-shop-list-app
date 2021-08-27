import { useContext } from 'react'
import ShopListContext from '../../../store/shop-list-context'
import classes from './ProductItem.module.css'
import ProductItemForm from './ProductItemForm'

const ProductItem = (props) => {
  const shopListContext = useContext(ShopListContext)
  const price = `$${props.price.toFixed(2)}`

  const onAddProductHandler = (amount) => {
    shopListContext.addProduct({
      id: props.id,
      name: props.name,
      amount,
      price: props.price,
    })
  }

  return (
    <li className={classes.product}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <ProductItemForm onAddProduct={onAddProductHandler} />
    </li>
  )
}

export default ProductItem
