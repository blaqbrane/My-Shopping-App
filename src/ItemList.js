import Datas from "./data";
import ItemCards from "./ItemCards";
import "./Styles/itemlist.css"
const ItemList = ({handleClick}) => {
    return ( 
        <section>
            {Datas.map((data) => {
                return(
                    <div key={data.id}>
                        <ItemCards data = {data} handleClick = {handleClick}/>
                    </div>
                )
            })}
        </section>
     );
}
 
export default ItemList;