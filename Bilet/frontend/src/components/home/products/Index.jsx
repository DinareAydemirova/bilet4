import React, { useEffect, useState } from "react";
import style from "./products.module.scss";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import { SlBasket } from "react-icons/sl";
import { useDispatch, useSelector } from "react-redux";
import { addToBasket } from "../../../redux/slices/basketSlice";
import {
  addTowishlist,
  remoFromwishlist,
} from "../../../redux/slices/wishlistSlice";

const Products = () => {
  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.wishlist.wishlist);

  const [data, setdata] = useState([]);
  useEffect(() => {
    axios.get("/products").then((res) => {
      setdata(res.data);
    });
  }, []);

  const isInWishlist = (id) => {
    return wishlist.some((item) => item._id == id);
  };

  const toggleWishlist = (item) => {
    if (isInWishlist(item._id)) {
      dispatch(remoFromwishlist({ _id: item._id }));
    }else{
        dispatch(addTowishlist(item))
    }
  };

  return (
    <div className={style.container}>
      <div className={style.toptexts}>
        <h1>Popular Items</h1>
        <p>
          Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
          gravida.
        </p>
      </div>
      <div className={style.products}>
        {data?.map((elem) => {
          return (
            <div className={style.cards}>
              <div className={style.heart}>
                <SlBasket onClick={() => dispatch(addToBasket(elem))} />
                <FaHeart style={{color:isInWishlist(elem._id)? "red":"black"}} onClick={() => toggleWishlist(elem)} />
              </div>
              <img src={elem.image} alt="" />
              <h2>{elem.title}</h2>
              <h4>${elem.price}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Products;
