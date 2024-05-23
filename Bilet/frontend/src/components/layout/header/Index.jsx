import React from "react";
import style from "./header.module.scss";
import { SlBasket } from "react-icons/sl";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const basket = useSelector((state) => state.basket.basket);
  const wishlist = useSelector((state) => state.wishlist.wishlist);


  let basketCount = basket?.reduce((acc, elem) => (acc += elem.count), 0);

  return (
    <div className={style.container}>
      <div className={style.navbar}>
        <h1>TineZone</h1>
        <ul>
          <Link to="/">Home</Link>

          <Link>About Us</Link>
          <Link>Shop</Link>
          <Link>Blog</Link>
          <Link>Contact</Link>
        </ul>
        <div>
          <Link to="/basket">
            {" "}
            <SlBasket />
          </Link>
          <span>{basketCount}</span>

          <Link to="/wishlist">
            <FaHeart />
          </Link>
          <span>{wishlist.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
