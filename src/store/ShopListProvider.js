import { useReducer } from 'react'

import ShopListContext from './shop-list-context'

const defaultShopListState = {
  products: [],
  totalPrice: 0,
}

const shopListReducer = (state, action) => {
  if (action.type === 'ADD_PRODUCT') {
    const newTotalPrice =
      state.totalPrice + action.product.price * action.product.amount

    const existingShopListProduct = state.products.find(
      (product) => product.id === action.product.id
    )
    let newShopList
    if (existingShopListProduct) {
      newShopList = state.products.map((product) =>
        product.id === existingShopListProduct.id
          ? {
              ...existingShopListProduct,
              amount: existingShopListProduct.amount + action.product.amount,
            }
          : product
      )
    } else {
      newShopList = [...state.products, action.product]
    }
    return { products: newShopList, totalPrice: newTotalPrice }
  }
  return defaultShopListState
}

const ShopListProvider = (props) => {
  const [shopListState, dispatchShopListAction] = useReducer(
    shopListReducer,
    defaultShopListState
  )

  const addProductToShopListHandler = (product) => {
    dispatchShopListAction({ type: 'ADD_PRODUCT', product })
  }

  const removeProductFromShopListHandler = (productId) => {
    dispatchShopListAction({ type: 'REMOVE_PRODUCT', productId })
  }

  const shopListContext = {
    products: shopListState.products,
    totalAmount: shopListState.totalAmount,
    addProduct: addProductToShopListHandler,
    removeProduct: removeProductFromShopListHandler,
  }
  return (
    <ShopListContext.Provider value={shopListContext}>
      {props.children}
    </ShopListContext.Provider>
  )
}

export default ShopListProvider
