import * as React from 'react';
import { shallow } from 'enzyme';
import {ProductItem} from '../../pages/store/ProductItem';
import { CartContext } from '../../contexts/CartContext';

describe('Pruebas en <ProductItem />', () => {

  const product = {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"
  }
  const wrapper = shallow( 
    <CartContext.Provider>
      <ProductItem  product={product} />
    </CartContext.Provider>
  )

  test('debe mostrar el producto correctamente', () => {
    expect ( wrapper ).toMatchSnapshot();
  })

})
