import "./Styles/navbar.css"
const Navbar = ({setDisplay,numberofitem}) =>{
    return(
        <nav>
            <div className="nav--container">
                <div>
                    <h2>Shopping Cart</h2>
                </div>
                <div onClick={() => setDisplay(false)} className="nav--icon">
                    <span><i class="fas fa-cart-plus"/></span>
                    <span className="nav--item">{numberofitem}</span>
                </div>
            </div> 
        </nav>
    )
}
export default Navbar