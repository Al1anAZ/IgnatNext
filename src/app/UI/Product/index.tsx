"use client"

import classes from "./Product.module.scss";

type ProductProps = {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  category: string;
  color?: string[];
  accessoriesprop?: string;
};

const Product: React.FC = () => {
  return (
    <section className={classes.product}>
      <div className={classes.product_top}>
        <img
          src="/imgs/content/product/product_block.png"
          alt="product_top_img"
          className={classes.product_top_img}
        />
        <a href="#!" className={classes.product_top_fav}>
          <img
            src="/imgs/UI/fav.svg"
            alt="product_top_fav"
            width={16}
            height={14}
          />
        </a>
      </div>
      <div className={classes.product_bottom}>
        <h4 className={classes.product_bottom_h4}>
          Термобілизна для бодібілдерів
        </h4>
        <span className={classes.product_bottom_category_desc}>
          <p className={classes.product_bottom_category}>Для чоловіків</p>
          <p className={classes.product_bottom_desc}>2 кольори</p>
        </span>
        <h4 className={classes.product_bottom_price}>4000 грн.</h4>
      </div>
    </section>
  );
};

export default Product;
