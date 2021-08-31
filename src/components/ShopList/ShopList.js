import { useContext, Fragment } from 'react'
import Modal from '../UI/Modal'

import classes from './ShopList.module.css'
import ShopListContext from '../../store/shop-list-context'
import ShopItem from './ShopItem'

const ShopList = (props) => {
  const shopListContext = useContext(ShopListContext)

  const totalPaymentAmount = `$${shopListContext.totalPrice.toFixed(2)}`
  const hasItems = shopListContext.products.length > 0

  const shopItemAddHandler = (item) => {
    shopListContext.addProduct({ ...item, amount: 1 })
  }
  const shopItems = (
    <ul className={classes['shop-items']}>
      {shopListContext.products.map((item) => (
        <ShopItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          onAdd={shopItemAddHandler.bind(null, item)}
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
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default ShopList
