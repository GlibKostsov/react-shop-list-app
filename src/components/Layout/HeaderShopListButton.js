import { isTemplateElement } from '@babel/types'
import { useContext, useEffect, useState } from 'react'

import ShopListContext from '../../store/shop-list-context'
import ShopListIcon from '../ShopList/ShopListIcon'
import classes from './HeaderShopListButton.module.css'

const HeaderShopListButton = () => {
  const [buttonIsBumping, setButtonIsBumping] = useState(false)

  const shopListContext = useContext(ShopListContext)
  const { products: productsList } = shopListContext
  const totalProductsAmount = productsList.reduce(
    (total, product) => total + product.amount,
    0
  )

  const buttonClasses = `${classes.button} ${
    buttonIsBumping ? classes.bump : ''
  }`

  useEffect(() => {
    if (productsList.length === 0) {
      return
    }
    setButtonIsBumping(true)
    const timer = setTimeout(() => {
      setButtonIsBumping(false)
    }, 300)
    return () => {
      clearTimeout(timer)
    }
  }, [productsList])

  return (
    <button className={buttonClasses}>
      <span className={classes.icon}>
        <ShopListIcon />
      </span>
      <span>Shopping List</span>
      <span className={classes.badge}>{totalProductsAmount}</span>
    </button>
  )
}

export default HeaderShopListButton
