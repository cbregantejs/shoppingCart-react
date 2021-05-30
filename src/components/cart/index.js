import React, { useContext } from 'react';
import CartProducts from './CartProducts';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';
import styles from './CartProducts.module.scss';


const Cart = () => {

    const { total, cartItems, itemCount, open } = useContext(CartContext);
    
    return ( 
        <div className={`${styles.contCart} ${open ? "activeCart" : ""}`} id="contCart">
            <div className="text-center mt-3">
                <h3>Carrito</h3>
                
            </div>

            <div className="row no-gutters justify-content-center">
                <div className="col-12">
                    {
                        cartItems.length > 0 ?
                        <CartProducts/> :
                        <div className="p-3 text-center text-muted">
                            no se agregaron productos
                        </div>
                    }
                </div>
                {
                    cartItems.length > 0 && 
                    <div className="col-12 p-3">
                        <div className="card card-body">
                            <div className="row">
                                <div className="col-6">
                                    <p className="mb-1">Total Items</p>
                                    <h5 className=" mb-3 txt-right">{itemCount}</h5>
                                </div>
                                <div className="col-6">
                                    <p className="mb-1">Total</p>
                                    <h5 className="m-0 txt-right">{formatNumber(total)}</h5>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                
            </div>
        </div>
     );
}
 
export default Cart;