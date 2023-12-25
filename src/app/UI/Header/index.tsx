"use client"


import classes from "./Header.module.scss";

const Header: React.FC = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header_top}>
        <div className="container">
          <div className={classes.header_top_body}>
            <span className={classes.header_top_left}>
              <a href="#" className={classes.header_link_phone}>
                098 900 09 09
              </a>
              <span>Допомога</span>
            </span>
            <div className={classes.header_top_right}>
              <span className={classes.header_login}>Увійти</span>/
              <span className={classes.header_registr}>Зареєструватися</span>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.header_bottom}>
        <div className="container">
          <div className={classes.header_bottom_body}>
            <div className={classes.header_logo}>
              <h3>IGNAT</h3>
            </div>
            <nav className={classes.header_menue}>
              <ul className={classes.header_list}>
                <li className={classes.header_link}>
                  <a href="#!" className="">
                    новинки
                  </a>
                </li>
                <li className={classes.header_link}>
                  <a href="#!" className="">
                    чоловіки
                  </a>
                </li>
                <li className={classes.header_link}>
                  <a href="#!" className="">
                    жінки
                  </a>
                </li>
                <li className={classes.header_link}>
                  <a href="#!" className="">
                    аксесуари
                  </a>
                </li>
                <li className={classes.header_link}>
                  <a href="#!" className="">
                    акції
                  </a>
                </li>
              </ul>
            </nav>
            <div className={classes.header_search_fav_cart}>
              <input
                type="text"
                className={classes.header_search}
                style={{ backgroundImage: "url('/imgs/UI/search.svg')" }}
              />
              <div className={classes.header_fav_cart}>
                <a href="#" className={classes.header_fav}>
                  <img src="/imgs/UI/fav.svg" alt="fav" />
                </a>
                <a href="#" className={classes.header_cart}>
                  <img src="/imgs/UI/cart.svg" alt="fav" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
