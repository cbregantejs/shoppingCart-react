import React, { useContext } from 'react';
import { useParams, Redirect } from 'react-router-dom';
import Layout from '../../components/Layout';
import { useFechDetailProduct } from '../../hooks/useFechDetailProduct';
import { CartContext } from '../../contexts/CartContext';
import { formatNumber } from '../../helpers/utils';



const ProductDetail = () => {
    const { id } = useParams();
    const { data: product, loading } = useFechDetailProduct(id);
    const { addProduct, cartItems, increase } = useContext(CartContext);
    if ( !product ) {
        return <Redirect to="/" />;
    } 

    const isInCart = product => {
        return !!cartItems.find(item => item.id === product.id);
    }
    

    return ( 
        <Layout title="Productos" description="This is the Store page" >
            { !loading && 
                <div className="row mt-5">
                    <div className="col-md-6 col-12">
                        <img className="img-fluid img-product" src={product.image + '?v=' + product.id} alt=""/>
                    </div>
                    <div className="col-md-6 col-12 mt-5">
                        <h2 className="mt-5">{product.title}</h2>
                        <h3 className="text-left">{formatNumber(product.price)}</h3>
                        <p>{product.description}</p>
                        <h4><span className="badge badge-secondary">{product.category}</span></h4>
                        {
                            isInCart(product) && 
                            <button 
                            onClick={() => increase(product)}
                            className="btn btn-outline-primary btn-sm">Aumentar</button>
                        }

                        {
                            !isInCart(product) && 
                            <button 
                            onClick={() => addProduct(product)}
                            className="btn btn-primary btn-sm">Agregar</button>
                        }
                    </div>
                </div>
            } 
            
        </Layout>
     );
}
 
export default ProductDetail;