import { useContext } from 'react'
import ShopListIcon from '../ShopList/ShopListIcon'
import classes from './HeaderShopListButton.module.css'
import ShopListContext from '../../store/shop-list-context'

const HeaderShopListButton = () => {
  const shopListContext = useContext(ShopListContext)
  const { products: productsList } = shopListContext
  const totalProductsAmount = productsList.reduce(
    (total, product) => total + product.amount,
    0
  )
  return (
    <button className={classes.button}>
      <span className={classes.icon}>
        <ShopListIcon />
      </span>
      <span>Shopping List</span>
      <span className={classes.badge}>{totalProductsAmount}</span>
    </button>
  )
}

export default HeaderShopListButton
