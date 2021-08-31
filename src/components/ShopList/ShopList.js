import { useContext, Fragment } from 'react'
import Modal from '../UI/Modal'

import classes from './ShopList.module.css'
import ShopListContext from '../../store/shop-list-context'
import ShopProduct from './ShopProduct'

const ShopList = (props) => {
  const shopListContext = useContext(ShopListContext)

  const totalPaymentAmount = `$${shopListContext.totalPrice.toFixed(2)}`
  const hasItems = shopListContext.products.length > 0

  const shopProductAddHandler = (product) => {
    shopListContext.addProduct({ ...product, amount: 1 })
  }

  const shopProductRemoveHandler = (productId) => {
    shopListContext.removeProduct(productId)
  }
  const shopItems = (
    <ul className={classes['shop-products']}>
      {shopListContext.products.map((product) => (
        <ShopProduct
          key={product.id}
          name={product.name}
          amount={product.amount}
          price={product.price}
          onAdd={shopProductAddHandler.bind(null, product)}
          onRemove={shopProductRemoveHandler.bind(null, product.id)}
        />
      ))}
    </ul>
  )

  return (
    <Modal onClose={props.onClose}>
      {shopItems}
      <div className={classes.total}>
        <span>Total Payment Amount</span>
        <span>{totalPaymentAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['close-button']} onClick={props.onClose}>
          Close
        </button>
        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  )
}

export default ShopList
