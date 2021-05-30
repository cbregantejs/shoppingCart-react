import { useState, useEffect } from "react";
import { getProductdetail } from '../helpers/getProductdetail';

export const useFechDetailProduct = ( id ) => {
  const [state, setState] = useState({
    data: {},
    loading: true
  });

  useEffect( () => {
     getProductdetail(id)
      .then( product => {
        setState({
          data: product,
          loading: false
        });        
      })
  }, [id]);

  return state;
}
