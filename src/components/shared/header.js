import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { CartContext } from '../../contexts/CartContext';
import styles from './header.module.scss';

const Header = () => {

    const {itemCount, showCart, hideCart,open} = useContext(CartContext);

    function toggleCart() {
        if(open){
            hideCart();
        } else{
            showCart();
        }
    }

    return ( 
        <nav className={`${styles.navbar} navbar navbar-expand-lg navbar-dark bg-dark`}>
            <Link className="navbar-brand" to='/'>Store</Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link to='/'>Productos</Link>
                    </li>
                </ul>
                <div className={`${styles.actions} my-lg-0`}>
                    <button type="button" className="btn btn-success" onClick={() => toggleCart()}>
                        <i className="bi bi-cart pr-2"></i>
                         <span className="badge badge-light">{itemCount}</span>
                    </button>
                </div>
            </div>
        </nav>
     );
}
 
export default Header;