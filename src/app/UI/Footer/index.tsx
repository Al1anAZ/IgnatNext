"use client"

import classes from "./Footer.module.scss";

const Footer: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <div className="container">
        <div className={classes.footer_top}>
          <div className={classes.footer_top_contacts}>
            <p className={classes.footer_top_contacts_p_title}>
              <span className={classes.footer_top_contacts_title}>
                Контакт - центр
              </span>
            </p>
            <p className={classes.footer_top_contacts_p}>098 900 09 09 </p>
            <p className={classes.footer_top_contacts_p}>
              Пн - Пт 09:00 - 21:00
            </p>
            <p className={classes.footer_top_contacts_p}>
              Пн - Пт 09:00 - 21:00
            </p>
          </div>
          <div className={classes.footer_top_forcustumers}>
            <p className={classes.footer_top_forcustumers_p_title}>
              <span className={classes.footer_top_forcustumers_title}>
                Покупцям
              </span>
            </p>
            <p className={classes.footer_top_forcustumers_p}>
              <a href="#!">Оплата і доставка</a>
            </p>
            <p className={classes.footer_top_forcustumers_p}>
              <a href="#!">Повернення</a>
            </p>
            <p className={classes.footer_top_forcustumers_p}>
              <a href="#!">Питання та відповіді</a>
            </p>
          </div>
          <div className={classes.footer_top_personal_office}>
            <p className={classes.footer_top_personal_office_p_title}>
              <span className={classes.footer_top_personal_office_title}>
                Особистий кабінет
              </span>
            </p>
            <p className={classes.footer_top_personal_office_p}>
              <a href="#!">Мої дані</a>
            </p>
            <p className={classes.footer_top_personal_office_p}>
              <a href="#!">Історія замовлень</a>
            </p>
            <p className={classes.footer_top_personal_office_p}>
              <a href="#!">Улюблені</a>
            </p>
            <p className={classes.footer_top_personal_office_p}>
              <a href="#!">Розсилки</a>
            </p>
          </div>
          <div className={classes.footer_top_about}>
            <p className={classes.footer_top_about_p_title}>
              <span className={classes.footer_top_about_title}>
                Про компанію
              </span>
            </p>
            <p className={classes.footer_top_about_p}>
              <a href="#!">Про нас</a>
            </p>
            <p className={classes.footer_top_about_p}>
              <a href="#!">Новини</a>
            </p>
            <p className={classes.footer_top_about_p}>
              <a href="#!">Стати партнером</a>
            </p>
            <p className={classes.footer_top_about_p}>
              <a href="#!">Угода користувача</a>
            </p>
          </div>
        </div>
      </div>
      <div className={classes.footer_bottom}>
        <div className="container">
          <div className={classes.footer_bottom_box}>
            <ul className={classes.footer_bottom_nav}>
              <li className={classes.footer_bottom_nav_li}>
                <a href="#!" className={classes.footer_bottom_nav_li_link}>
                  новинки
                </a>
              </li>
              <li className={classes.footer_bottom_nav_li}>
                <a href="#!" className={classes.footer_bottom_nav_li_link}>
                  чоловіки
                </a>
              </li>
              <li className={classes.footer_bottom_nav_li}>
                <a href="#!" className={classes.footer_bottom_nav_li_link}>
                  жінки
                </a>
              </li>
              <li className={classes.footer_bottom_nav_li}>
                <a href="#!" className={classes.footer_bottom_nav_li_link}>
                  аксесуари
                </a>
              </li>
              <li className={classes.footer_bottom_nav_li}>
                <a href="#!" className={classes.footer_bottom_nav_li_link}>
                  акції
                </a>
              </li>
            </ul>
            <span className={classes.footer_bottom_copyr}>
              © 2022 — {new Date().getFullYear()} IGNAT. Усі права захищені.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
