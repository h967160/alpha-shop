import styles from "./Cart.module.scss";
import Product from "./Product";

// 購物車商品列表
function ProductList({ products, updateQuantity, removeProduct }) {
  return (
    <section className={`${styles.productList} col col-12`}>
      {/* 遍歷每個商品 */}
      {products.map((product) => (
        <Product
          key={product.id}
          updateQuantity={updateQuantity}
          removeProduct={removeProduct}
          {...product}
        />
      ))}
    </section>
  );
}

export default ProductList;
