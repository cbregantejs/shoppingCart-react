import { getProductdetail } from '../../helpers/getProductdetail';


describe('Pruebas con getProductdetail', () => {

  test('debe devolver un producto', async() => {
    const id = 1;
    const product = await getProductdetail(id);
    expect(product).not.toBeNull()
  })

})
