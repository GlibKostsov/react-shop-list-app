import React from 'react'

const ShopListContext = React.createContext({
  products: [],
  totalPrice: 0,
  addProduct: (product) => {},
  removeProduct: (id) => {},
})

export default ShopListContext
