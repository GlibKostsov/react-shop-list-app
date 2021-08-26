import ShopListIcon from '../ShopList/ShopListIcon'
import classes from './HeaderShopListButton.module.css'

const HeaderShopListButton = () => {
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <ShopListIcon />
      </span>
      <span>Shopping List</span>
      <span className={classes.badge}>5</span>
    </button>
  )
}

export default HeaderShopListButton
