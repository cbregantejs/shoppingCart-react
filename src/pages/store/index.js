import React from 'react';
import Layout from '../../components/Layout';

import ProductsGrid from './ProductsGrid';

const Store = () => {
    
    return ( 
        <Layout title="Productos" description="layout de la tienda" >
            <div >
                <div className="text-center mt-5">
                    <h1>Productos</h1>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}
 
export default Store;