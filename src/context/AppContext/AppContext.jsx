import React, { createContext, useContext, useState } from 'react';


const AppContext = createContext();


const AppProvider = ({ children }) => {
  
  const [wishListState, setWishListState]= useState([])
  const [cartListState, setCartListState]= useState([])
  const [allProducts, setAllProducts]= useState([])

  const removehandler1 = (item) => {
    const newPeople = wishListState.filter((person) => person.id !== item.id);
  
    setWishListState(newPeople)
  }

  const removehandler2 = (item) => {
    const newPeople = cartListState.filter((person) => person.id !== item.id);
    setCartListState(newPeople)
  }
  const toCard = (item)=>{
    const addToCard = cartListState.filter((person)=> person.id !== item.id) 
    setCartListState(addToCard)

  }

  return (
    <AppContext.Provider value={{wishListState, setWishListState, cartListState, setCartListState, allProducts, setAllProducts, removehandler1, removehandler2, toCard }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => useContext(AppContext);

export { AppProvider, useAppContext };
