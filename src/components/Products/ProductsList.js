import ProductItem from './ProductItem/ProductItem'
import Card from '../UI/Card'
import classes from './ProductsList.module.css'
import PRODUCTS from '../../store/dataSeed'

const ProductsList = () => {
  const productsList = PRODUCTS.map((product) => (
    <ProductItem
      key={product.id}
      id={product.id}
      name={product.name}
      description={product.description}
      price={product.price}
    />
  ))
  return (
    <section className={classes.products}>
      <Card>
        <ul>{productsList}</ul>
      </Card>
    </section>
  )
}
export default ProductsList
