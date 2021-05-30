import React, { createContext } from 'react';
import { useFechProducts } from '../hooks/useFechProducts';
export const ProductsContext = createContext()

const ProductsContextProvider = ({children}) => {

    const { data: products } = useFechProducts();

    return ( 
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}
 
export default ProductsContextProvider;