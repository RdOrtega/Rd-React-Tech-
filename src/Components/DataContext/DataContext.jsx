import { createContext, useState } from "react";

//export Context..........
export const DataContext = createContext();

export const DataContextProvider = ({ children }) => {

  //estado inicial de carrito.......
  const [cart, setCart] = useState([]);


  //add item al carrito..........
  const AddToCart = (data, cant) => {

    let newCart;
    let prod = cart.find(prod => prod.id === data.id);

    if (prod) {
      prod.cant = cant;
      newCart = [...cart];

    } else {
      newCart = [...cart, { ...data, cant }];
    }
    setCart(newCart);
  };

  //cantidad de items del cart......
  function cantidadItems() {
    return cart?.reduce((total, item) => total + item.cant, 0);
  }

  //vaciar cart......
  const cleanCart = () => {
    setCart([]);
  };

  //eliminar item del cart.......
  function deleteToCart(id) {
    setCart(cart.filter((item) => item.id !== id));
  }

  //calcular total cart.......
  function valorFinalPorProducto() {
    return cart.reduce((total, item) => total + (item.cant * item.precio), 0);
  }


  return (
    <DataContext.Provider
      value={{
        cart,
        AddToCart,
        cleanCart,
        deleteToCart,
        valorFinalPorProducto,
        cantidadItems,
      }}
    >
      {" "}
      {children}
    </DataContext.Provider>
  );
};
