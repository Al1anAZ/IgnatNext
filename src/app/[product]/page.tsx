"use client"

import MyButton from "../UI/MyButton";
import classes from "./page.module.scss";

type ProductProps = {};

const ProductPage: React.FC<ProductProps> = () => {
  return (
    <section className={classes.product_page}>
      <div className="container">
        <span className={classes.product_page_path}>
          головна - чоловіки - одяг - термобілизна - atlantic -{" "}
          <span className={classes.product_page_path_item}>
            чоловічий термокостюм atlantic MW0MW32780
          </span>
        </span>
        <div className={classes.product_page_item_content}>
          <div className={classes.product_page_item_imgs}>
            <div className={classes.product_page_item_imgs_mainImg}>
              <img
                src="/imgs/content/product/main/Main_prod_img.png"
                alt="product_page_item_imgs_mainImg"
              />
            </div>
            <div className={classes.product_page_item_imgs_small_box}>
              <div className={classes.product_page_item_imgs_small}>
                <img
                  src="/imgs/content/product/small/Small_prod_img.png"
                  alt="product_page_item_imgs_mainImg"
                />
              </div>
              <div className={classes.product_page_item_imgs_small}>
                <img
                  src="/imgs/content/product/small/Small_prod_img.png"
                  alt="product_page_item_imgs_mainImg"
                />
              </div>
              <div className={classes.product_page_item_imgs_small}>
                <img
                  src="/imgs/content/product/small/Small_prod_img.png"
                  alt="product_page_item_imgs_mainImg"
                />
              </div>
            </div>
          </div>
          <form
            className={classes.product_page_item_right}
            onSubmit={(e) => e.preventDefault()}
          >
            <div className={classes.product_page_item_right_descr}>
              <h3 className={classes.product_page_item_right_descr_h3}>
                чоловічий термокостюм atlantic
              </h3>
              <p className={classes.product_page_item_right_descr_p}>
                термокостюм
              </p>
              <h3 className={classes.product_page_item_right_descr_price}>
                3700 грн.
              </h3>
              <span className={classes.product_page_item_right_descr_color_size_search_box}>
              <fieldset className={classes.product_page_item_right_descr_size}>
                <legend>Розмір</legend>
                <input
                  type="checkbox"
                  id="sizeXS"
                  value="XS"
                  data-text="XS"
                  className={classes.product_page_item_right_descr_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeS"
                  value="S"
                  data-text="S"
                  className={classes.product_page_item_right_descr_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeM"
                  value="M"
                  data-text="M"
                  className={classes.product_page_item_right_descr_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeL"
                  value="L"
                  data-text="L"
                  className={classes.product_page_item_right_descr_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeXL"
                  value="XL"
                  data-text="XL"
                  className={classes.product_page_item_right_descr_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeXXL"
                  value="XXL"
                  data-text="XXL"
                  className={classes.product_page_item_right_descr_size_input}
                />
              </fieldset>
              <fieldset className={classes.product_page_item_right_descr_color}>
                <legend>Колір</legend>
                <input
                  type="checkbox"
                  id="colorCheckbox1"
                  value="white"
                  style={{
                    backgroundColor: `white`,
                    border: `1px solid black`,
                  }}
                  className={classes.product_page_item_right_descr_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox2"
                  value="grey"
                  style={{ backgroundColor: `grey` }}
                  className={classes.product_page_item_right_descr_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox3"
                  value="black"
                  style={{ backgroundColor: `black` }}
                  className={classes.product_page_item_right_descr_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox3"
                  value="red"
                  style={{ backgroundColor: `red` }}
                  className={classes.product_page_item_right_descr_color_input}
                />
              </fieldset>           
            </span>
              <div className={classes.product_page_item_right_descr_info}>
                <h4 className={classes.product_page_item_right_descr_info_h4}>
                  інформація про товар
                </h4>
                <p className={classes.product_page_item_right_descr_info_p}>
                  <span className={classes.product_page_item_right_descr_info_p_title}>Терморегуляція забезпечить вам тепло в будь-якій ситуації.<br/></span>      
                  Сучасні технології дозволяють нашому термокостюму адаптуватися
                  до вашого тіла та навколишнього середовища.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Легкість та еластичність для максимальної свободи рухів.<br/></span>
                  Забудьте про невигоди - наш термокостюм розроблений з
                  урахуванням вашої активності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Дихаючі тканини для оптимальної вентиляції.<br/></span>
                  Забудьте про
                  потовиділення - наш термокостюм дозволяє шкірі "дихати",
                  забезпечуючи вам комфорт під час активної діяльності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Терморегуляція забезпечить вам тепло в будь-якій ситуації.<br/></span>
                  Сучасні технології дозволяють нашому термокостюму адаптуватися
                  до вашого тіла та навколишнього середовища.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Легкість та еластичність для максимальної свободи рухів.<br/></span>
                  Забудьте про невигоди - наш термокостюм розроблений з
                  урахуванням вашої активності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Дихаючі тканини для оптимальної вентиляції.<br/></span>
                  Забудьте про
                  потовиділення - наш термокостюм дозволяє шкірі "дихати",
                  забезпечуючи вам комфорт під час активної діяльності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                  <span className={classes.product_page_item_right_descr_info_p_title}>Терморегуляція забезпечить вам тепло в будь-якій ситуації.<br/></span>      
                  Сучасні технології дозволяють нашому термокостюму адаптуватися
                  до вашого тіла та навколишнього середовища.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Легкість та еластичність для максимальної свободи рухів.<br/></span>
                  Забудьте про невигоди - наш термокостюм розроблений з
                  урахуванням вашої активності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Дихаючі тканини для оптимальної вентиляції.<br/></span>
                  Забудьте про
                  потовиділення - наш термокостюм дозволяє шкірі "дихати",
                  забезпечуючи вам комфорт під час активної діяльності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Терморегуляція забезпечить вам тепло в будь-якій ситуації.<br/></span>
                  Сучасні технології дозволяють нашому термокостюму адаптуватися
                  до вашого тіла та навколишнього середовища.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Легкість та еластичність для максимальної свободи рухів.<br/></span>
                  Забудьте про невигоди - наш термокостюм розроблений з
                  урахуванням вашої активності.
                </p>
                <p className={classes.product_page_item_right_descr_info_p}>
                <span className={classes.product_page_item_right_descr_info_p_title}>Дихаючі тканини для оптимальної вентиляції.<br/></span>
                  Забудьте про
                  потовиділення - наш термокостюм дозволяє шкірі "дихати",
                  забезпечуючи вам комфорт під час активної діяльності.
                </p>
              </div>
            </div>
            <div className={classes.product_page_item_right_actions}>
              <MyButton
                handle={() => {}}
                className={classes.product_page_item_right_actions_btnorder}
              >
                <p>оформити замовлення</p>
              </MyButton>
              <MyButton
                handle={() => {}}
                className={classes.product_page_item_right_actions_btncredit}
              >
               <p> купити у кредит</p>
              </MyButton>
              <span
                className={classes.product_page_item_right_actions_fav_cart_box}
              >
                <a
                  href="#"
                  className={classes.product_page_item_right_actions_fav}
                >
                  <img src="/imgs/UI/fav.svg" alt="fav" />
                </a>
                <a
                  href="#"
                  className={classes.product_page_item_right_actions_cart}
                >
                  <img src="/imgs/UI/cart.svg" alt="fav" />
                </a>
              </span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ProductPage;
