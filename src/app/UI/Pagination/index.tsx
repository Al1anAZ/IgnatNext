"use client"

import { useEffect, useState } from "react";
import classes from "./Pagination.module.scss";
import Product from "../Product";

//пропсы для запроса к беку, каталог, топ товары и тд.
type PaginationProps = {
  title: string;
  catalog?: string;
};

const Paginatoin: React.FC<PaginationProps> = ({ title, catalog }) => {
  //для паганиции
  const [products, setProducts] = useState([]);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  useEffect(() => {}, []);

  return (
    <section className={classes.pagination}>
      <div className={classes.pagination_top}>
        <span className={classes.pagination_top_text}>
          <h3 className={classes.pagination_top_text_h3}>{title}</h3>
          <p className={classes.pagination_top_text_p}>
            {catalog && `(${167} товарів)`}
          </p>
        </span>
        <div className={classes.pagination_top_pagination}>
          <span className={classes.pagination_top_pagination_left_box}>
            <p className={classes.pagination_top_pagination_left_currpage}>
              01
            </p>
            <p>/</p>
            <p className={classes.pagination_top_pagination_left_totalpages}>
              03
            </p>
          </span>
          <span className={classes.pagination_top_pagination_right_box}>
            <a
              href="#!"
              className={classes.pagination_top_pagination_right_arrowLeft}
            >
              {" "}
              <img
                src="/imgs/UI/pagination_arror_hot_prod.svg"
                alt="pagination_top_pagination_right_arrowLeft"
                className={classes.pagination_top_pagination_right_arrowLeft}
              />
            </a>
            <a
              href="#!"
              className={classes.pagination_top_pagination_right_arrowRight}
            >
              {" "}
              <img
                src="/imgs/UI/pagination_arror_hot_prod.svg"
                alt="pagination_top_pagination_right_arrowRight"
                className={classes.pagination_top_pagination_right_arrowRight}
              />
            </a>
          </span>
        </div>
      </div>
      <div className={classes.pagination_content}>
        <Product />
        <Product />
        <Product />
      </div>
    </section>
  );
};

export default Paginatoin;
