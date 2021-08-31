import classes from './ShopItem.module.css'

const ShopItem = (props) => {
  const price = `$${props.price.toFixed(2)}`

  return (
    <li className={classes['shop-item']}>
      <div>
        <h2>{props.name}</h2>
        <div className={classes.summary}>
          <span className={classes.price}>{price}</span>
          <span className={classes.amount}> x {props.amount}</span>
        </div>
      </div>
      <div className={classes.actions}>
        <button>-</button>
        <button onClick={props.onAdd}>+</button>
      </div>
    </li>
  )
}

export default ShopItem
