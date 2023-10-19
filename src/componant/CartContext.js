import React, { createContext, useContext, useReducer } from 'react';

const CartContext = createContext();

const cartReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      const existingItem = state.items.find((item) => item.id === action.payload.id);

      if (existingItem) {
        const updatedItems = state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
              totalPrice: parseFloat(item.description) * (item.count + 1),
            };
          }
          return item;
        });

        return { items: updatedItems };
      } else {
        const newItem = {
          ...action.payload,
          count: 1,
          totalPrice: parseFloat(action.payload.description),
        };
        return { items: [...state.items, newItem] };
      }

    case 'INCREASE_COUNT':
      return {
        items: state.items.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              count: item.count + 1,
              totalPrice: parseFloat(item.description) * (item.count + 1),
            };
          }
          return item;
        }),
      };

    case 'REMOVE_ITEM':
      return {
        items: state.items.filter((item) => item.id !== action.payload.id),
      };

    case 'DECREASE_COUNT':
      return {
        items: state.items.map((item) => {
          if (item.id === action.payload.id && item.count > 1) {
            return {
              ...item,
              count: item.count - 1,
              totalPrice: parseFloat(item.description) * (item.count - 1),
            };
          }
          return item;
        }),
      };

    case 'CLEAR_CART':
      return {
        items: [],
      };

    default:
      return state;
  }
};


export const CartProvider = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(cartReducer, { items: [] });

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
