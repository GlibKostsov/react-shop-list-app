import { useState } from 'react'
import Header from './components/Layout/Header'
import Products from './components/Products/Products'
import ShopListProvider from './store/ShopListProvider'
import ShopList from './components/ShopList/ShopList'
const App = () => {
  const [shopListIsShown, setShopListIsShown] = useState(false)

  const showShopListHandler = () => {
    setShopListIsShown(true)
  }

  const hideShopListHandler = () => {
    setShopListIsShown(false)
  }

  return (
    <ShopListProvider>
      {shopListIsShown && <ShopList onClose={hideShopListHandler} />}
      <Header onShowShopList={showShopListHandler} />
      <main>
        <Products />
      </main>
    </ShopListProvider>
  )
}

export default App
