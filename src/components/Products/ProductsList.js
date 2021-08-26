import Card from '../UI/Card'
import classes from './ProductsList.module.css'
import PRODUCTS from '../../store/dataSeed'

const ProductsList = () => {
  const productsList = PRODUCTS.map((product) => (
    <li key={product.id}>
      <div>
        <h3>{product.name}</h3>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
      <form action=''></form>
    </li>
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
