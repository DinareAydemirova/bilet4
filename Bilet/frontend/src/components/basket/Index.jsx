import React from 'react'
import style from "./basket.module.scss"
import { FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, remoFromBaket, removeAllFromBaket } from '../../redux/slices/basketSlice';
import { FaRegTrashAlt } from "react-icons/fa";
import { addTowishlist, removeAllFromwishlist } from '../../redux/slices/wishlistSlice';

const Basket = () => {
    const basket =useSelector((state)=>state.basket.basket)
  const wishlist = useSelector((state) => state.wishlist.wishlist);

    const dispatch= useDispatch()

const totalPrice=(item)=>{
return item.price*item.count
}

const subTotal=()=>{
    return basket.reduce((acc,elem)=>acc+totalPrice(elem),0)
}

const isInWishlist = (id) => {
    return wishlist.some((item) => item._id == id);
  };

  const toggleWishlist = (item) => {
    if (isInWishlist(item._id)) {
      dispatch(removeAllFromwishlist({ _id: item._id }));
    }else{
        dispatch(addTowishlist(item))
    }
  };

  return (
    <div className={style.container}>
    <h1>Basket</h1>
    <button onClick={()=>dispatch(removeAllFromBaket())}>clear all</button>

    <div className={style.products}>
      {basket?.map((elem) => {
        return (
         <>
         
          <div className={style.cards}>
              <div className={style.heart}>
              <FaHeart style={{color:isInWishlist(elem._id)?"red":"black"}} onClick={()=>toggleWishlist(elem)}/>
              <FaRegTrashAlt  onClick={()=>dispatch(remoFromBaket({_id:elem._id}))} />
              </div>
            <img src={elem.image} alt="" />
            <h2>{elem.title}</h2>
            <h4>{`$${totalPrice(elem)}`}</h4>
            <div>
                <button onClick={()=>dispatch(decrement({_id:elem._id}))}>-</button>
                <span>{elem.count}</span>
                <button onClick={()=>dispatch(increment({_id:elem._id}))}>+</button>
            </div>
          </div>
         </>
          
        );
      })}
    </div>
    <h2>${subTotal()}</h2>

  </div>
  )
}

export default Basket