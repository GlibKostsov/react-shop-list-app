import { useContext, Fragment } from 'react'
import Modal from '../UI/Modal'

import classes from './ShopList.module.css'
import ShopListContext from '../../store/shop-list-context'

const ShopList = (props) => {
  const shopListContext = useContext(ShopListContext)

  const totalPaymentAmount = `$${shopListContext.totalPrice.toFixed(2)}`

  return (
    <Modal onClose={props.onClose}>
      <div className={classes.total}>
        <h1>This is shop list</h1>
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
