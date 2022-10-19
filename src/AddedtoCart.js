import { useEffect, useState } from "react";
import "./Styles/addedtocart.css";
const AdddedtoCart = ({carts,setCarts,setDisplay}) => {
    const[price, setPrice] = useState(0)
    const Addnum = (id) =>{
        const add = carts.map((cart) => {
            return cart.id === id ? {...cart, num:cart.num + 1} : cart
        })
        setCarts(add)
    }
    const Subtractnum = (id) =>{
        const subtract = carts.map((cart) => {
            return cart.id === id ? {...cart, num:cart.num - 1} : cart
        })
        setCarts(subtract)
    }
    const Deletenum = (id) =>{
        const removenum = carts.filter(cart => cart.id !== id)
        setCarts(removenum)
        handlePrice()
    }
    const handlePrice = () =>{
        let updated_price = 0
        carts.map((cart) => ( updated_price+=cart.num * cart.price))
        setPrice(updated_price)
    }

    useEffect(() => {
        handlePrice()
    })
    return ( 
        <div className="added--container">
            {carts.length===0 && <p onClick={() => setDisplay(true)}className="zero--item">...Add item to your cart!!!</p>}
            {carts.map((cart) => {
                return(
                    <div key={cart.id} className="cart--container">
                        <div className="cart--img">
                            <img src={cart.img} alt=""/>
                            <p>{cart.title}</p>
                        </div>
                        <div className="btn">
                            <button onClick={() => Addnum(cart.id)} className="btn--add">+</button>
                            <button className="btn--num">{cart.num}</button>
                            <button onClick={() => Subtractnum(cart.id)}className="btn--subtract">-</button>
                        </div>
                        <div className="price--delete">
                            <span>${cart.price}</span>
                            <button onClick={() => Deletenum(cart.id)}>Delete</button>
                        </div>
                    </div>
                )
            })}
            <div className="cart--total" >
                { carts.length === 0 ? "" : <span className="span--text">Total price of your item</span>}
                {carts.length === 0 ? "" : <span className="span--price"> ${price} </span>}
            </div>
        </div>
     );
}
 
export default AdddedtoCart;