import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { SlBasket } from "react-icons/sl";
import { FaRegTrashAlt } from "react-icons/fa";
import style from "./wish.module.scss"


import { FaHeart } from "react-icons/fa";

import {
  remoFromwishlist,
  removeAllFromwishlist,
} from "../../redux/slices/wishlistSlice";
import { addToBasket } from "../../redux/slices/basketSlice";

const Wishlist = () => {
  const wishlist = useSelector((state) => state.wishlist.wishlist);
  const dispatch = useDispatch();


  const toggleWishlist = (item) => {
  
      dispatch(remoFromwishlist({ _id: item._id }));
   
  };

  return (
    <div className={style.container}>
      <h1>Wishlist</h1>
      <button onClick={() => dispatch(removeAllFromwishlist())}>
        clear all
      </button>

      <div className={style.products}>
        {wishlist?.map((elem) => {
          return (
            <>
              <div className={style.cards}>
                <div className={style.heart}>
                <SlBasket onClick={()=>dispatch(addToBasket(elem))}/>
                  <FaHeart style={{color:"red"}} onClick={()=>toggleWishlist(elem)}/>
                  <FaRegTrashAlt
                    onClick={() =>
                      dispatch(remoFromwishlist({ _id: elem._id }))
                    }
                  />
                </div>
                <img src={elem.image} alt="" />
                <h2>{elem.title}</h2>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Wishlist;
