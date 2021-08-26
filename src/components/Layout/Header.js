import { Fragment } from 'react'
import classes from './Header.module.css'
import HeaderShopListButton from './HeaderShopListButton'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shopping List</h1>
        <HeaderShopListButton />
      </header>
    </Fragment>
  )
}
export default Header
