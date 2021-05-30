import React, { useContext } from 'react';
import { CartContext } from '../../contexts/CartContext';

import { formatNumber } from '../../helpers/utils';

const CartItem = ({product}) => {

    const { increase, decrease, removeProduct } = useContext(CartContext);

    return ( 
        <div className="row no-gutters py-2">
            <div className="col-8 p-2">
                <p className="mb-1">
                    {product.title} <span className="badge badge-secondary">x {product.quantity}</span>
                </p>
                <p className="mb-1">Precio: {formatNumber(product.price)} </p>
                
            </div>
            <div className="col-4 p-2 text-right">
                 <button 
                 onClick={() => increase(product)}
                 className="btn btn-primary btn-sm mr-2 mb-1">
                     <i className="bi bi-plus-circle"></i>
                 </button>

                 {
                     product.quantity > 1 &&
                     <button
                    onClick={() => decrease(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <i className="bi bi-arrow-down-circle"></i>
                    </button>
                 }

                {
                     product.quantity === 1 &&
                     <button
                    onClick={() => removeProduct(product)}
                    className="btn btn-danger btn-sm mb-1">
                        <i className="bi bi-trash"></i>
                    </button>
                 }
                 
            </div>
        </div>
     );
}
 
export default CartItem;