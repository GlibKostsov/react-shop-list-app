import { Fragment } from 'react'
import Header from './components/Layout/Header'
import Products from './components/Products/Products'
import ShopListProvider from './store/ShopListProvider'

const App = () => {
  return (
    <ShopListProvider>
      <Header />
      <main>
        <Products />
      </main>
    </ShopListProvider>
  )
}

export default App
