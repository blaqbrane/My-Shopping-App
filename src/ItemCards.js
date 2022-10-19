const ItemCards = ({data,handleClick}) => {
    return ( 
        <div className="itemcard--container">
            <div className="itemcard--img" >
                <img src={data.img} alt=""/>
            </div>
            <div className="itemcard--detail">
                <h2>{data.title}</h2>
                <p className="itemcard--author">{data.author}</p>
                <p>${data.price}</p>
                <button onClick={() => handleClick(data)}>Add to Cart</button>
            </div>
        </div>
     );
}
 
export default ItemCards;