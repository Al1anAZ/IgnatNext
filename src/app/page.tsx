"use client"
import MyButton from "./UI/MyButton";
import MySlider from "./UI/MySlider";
import Paginatoin from "./UI/Pagination";
import classes from "./page.module.scss";

export default function Home() {
  return (
    <main>
      <MySlider>
        <img src="/imgs/slider/slider_image.png" alt="slider_img" />
        <img src="/imgs/slider/slider_image.png" alt="slider_img" />
        <img src="/imgs/slider/slider_image.png" alt="slider_img" />
        <img src="/imgs/slider/slider_image.png" alt="slider_img" />
        <img src="/imgs/slider/slider_image.png" alt="slider_img" />
      </MySlider>
      <section className={classes.main_to_catalog}>
        <div className={classes.main_to_catalog_text}>
          <h2 className={classes.main_to_catalog_text_h2}>
            Ми знаємо, що сподобається вашим “великим” друзям!
          </h2>
          <p className={classes.main_to_catalog_text_p}>
            Обирай подарунок своїм друзями бодібілдерам із нашою новою колекцію
            термобілизни “Big warm”
          </p>
          <MyButton
            handle={() => {}}
            className={classes.main_to_catalog_text_button}
          >
            <p>До каталогу</p>
          </MyButton>
        </div>
        <div className={classes.main_to_catalog_img_box}>
          <img
            src="/imgs/content/MainToCatalog_Img.png"
            alt="main_to_catalog_img"
            className={classes.main_to_catalog_img_box_img}
          />
        </div>
      </section>
      <Paginatoin title="Найгарячіші товари" />
    </main>
  )
}
