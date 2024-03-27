import minus from "../../../assets/icons/minus.svg";
import plus from "../../../assets/icons/plus.svg";
import styles from "./Cart.module.scss";

// Product Component
function Product({ name, img, price, quantity }) {
  return (
    <div
      className={`${styles.productContainer} col col-12`}
      data-count="2"
      data-price="100"
    >
      <img className={`${styles.imgContainer}`} src={img} alt={name} />
      <div className={`${styles.productInfo}`}>
        <div className={`${styles.productName}`}>{name}</div>
        <div className={`${styles.productControlContainer}`}>
          <ProductControl quantity={quantity} />
        </div>
        <div className={`${styles.price}`}>${price}</div>
      </div>
    </div>
  );
}

// Product List Component
function ProductList({ products }) {
  return (
    <section
      className={`${styles.productList} col col-12`}
      data-total-price="0"
    >
      {products.map((product) => (
        <Product key={product.id} {...product} />
      ))}
    </section>
  );
}

// Product Control Component
function ProductControl({ quantity }) {
  return (
    <div className={`${styles.productControl}`}>
      <img
        className={`${styles.productAction} minus`}
        src={minus}
        alt="minus.svg"
      />
      <span className={`${styles.productCount}`}>{quantity}</span>
      <img
        className={`${styles.productAction} minus`}
        src={plus}
        alt="plus.svg"
      />
    </div>
  );
}

// Cart Component
export default function Cart() {
  const data = [
    {
      id: "1",
      name: "貓咪罐罐",
      img: "https://picsum.photos/300/300?text=1",
      price: 100,
      quantity: 2,
    },
    {
      id: "2",
      name: "貓咪干干",
      img: "https://picsum.photos/300/300?text=2",
      price: 200,
      quantity: 1,
    },
  ];

  return (
    <section className={`${styles.cartContainer} col col-lg-5 col-sm-12`}>
      <h3 className={`${styles.cartTitle}`}>購物籃</h3>
      <ProductList products={data} />
      <section className={`${styles.cartInfo} shipping col col-12`}>
        <div className={`${styles.text}`}>運費</div>
        <div className={`${styles.price}`}>免費</div>
      </section>
      <section className={`${styles.cartInfo} total col col-12`}>
        <div className={`${styles.text}`}>小計</div>
        <div className={`${styles.price}`}>$0</div>
      </section>
    </section>
  );
}
