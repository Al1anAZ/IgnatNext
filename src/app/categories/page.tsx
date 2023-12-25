"use client"
import MyButton from "../UI/MyButton";
import Paginatoin from "../UI/Pagination";
import classes from "./page.module.scss";

const Categories: React.FC = () => {
  return (
    <section className={classes.categories}>
      <div className={classes.categories_top}>
        <a href="#!" className={classes.categories_top_path}>
          головна - чоловіки - одяг - <span>термобілизна</span>
        </a>
        <div className={classes.categories_top_settings_box}>
          <form
            className={classes.categories_top_settings_color_size_search_box}
            onSubmit={(e) => e.preventDefault()}
          >
            <span>
              <fieldset className={classes.categories_top_settings_color}>
                <legend>Колір</legend>
                <input
                  type="checkbox"
                  id="colorCheckbox1"
                  value="white"
                  style={{
                    backgroundColor: `white`,
                    border: `1px solid black`,
                  }}
                  className={classes.categories_top_settings_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox2"
                  value="grey"
                  style={{ backgroundColor: `grey` }}
                  className={classes.categories_top_settings_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox3"
                  value="black"
                  style={{ backgroundColor: `black` }}
                  className={classes.categories_top_settings_color_input}
                />
                <input
                  type="checkbox"
                  id="colorCheckbox3"
                  value="red"
                  style={{ backgroundColor: `red` }}
                  className={classes.categories_top_settings_color_input}
                />
              </fieldset>
              <fieldset className={classes.categories_top_settings_size}>
                <legend>Розмір</legend>
                <input
                  type="checkbox"
                  id="sizeXS"
                  value="XS"
                  data-text="XS"
                  className={classes.categories_top_settings_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeS"
                  value="S"
                  data-text="S"
                  className={classes.categories_top_settings_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeM"
                  value="M"
                  data-text="M"
                  className={classes.categories_top_settings_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeL"
                  value="L"
                  data-text="L"
                  className={classes.categories_top_settings_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeXL"
                  value="XL"
                  data-text="XL"
                  className={classes.categories_top_settings_size_input}
                />
                <input
                  type="checkbox"
                  id="sizeXXL"
                  value="XXL"
                  data-text="XXL"
                  className={classes.categories_top_settings_size_input}
                />
              </fieldset>
            </span>
            <MyButton
              className={classes.categories_top_settings_searchbtn}
              handle={() => {}}
            >
              <p>пошук</p>
            </MyButton>
          </form>
        </div>
      </div>
      <div className={classes.categories_content}>
        <Paginatoin title="Ось що ми знайшли" catalog="ПИСЯ ПОПА" />
      </div>
    </section>
  );
};

export default Categories;
