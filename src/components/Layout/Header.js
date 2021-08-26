import { Fragment } from 'react'
import classes from './Header.module.css'

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>Shopping List</h1>
        <button>Show List</button>
      </header>
      <div className={classes['landing-image']} />
    </Fragment>
  )
}
export default Header
