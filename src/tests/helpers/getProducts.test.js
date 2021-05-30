import { getProducts } from '../../helpers/getProducts';


describe('Pruebas con getProducts', () => {

  test('debe traer 20 elementos', async() => {
    const products = await getProducts();
    expect(products.length).toBe(20)
  })

})
