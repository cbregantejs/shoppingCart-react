export const getProductdetail = async(id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const resp = await fetch( url );
  const  data = await resp.json();
  
  return data;
}