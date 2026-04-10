'use client';
import {createContext, FC, ReactNode, useContext, useEffect, useReducer} from 'react';

type CartState = {items: CartItem[]};

type CartAction =
  | {type: 'ADD'; item: CartItem}
  | {type: 'REMOVE'; productId: string; size: string}
  | {type: 'UPDATE_QTY'; productId: string; size: string; quantity: number}
  | {type: 'LOAD'; items: CartItem[]}
  | {type: 'CLEAR'};

type CartContextType = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, size: string) => void;
  updateQty: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const STORAGE_KEY = 'carape-korpa-v1';

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case 'LOAD':
      return {items: action.items};
    case 'ADD': {
      const idx = state.items.findIndex(
        i => i.product.id === action.item.product.id && i.size === action.item.size,
      );
      if (idx >= 0) {
        const items = [...state.items];
        items[idx] = {...items[idx], quantity: items[idx].quantity + action.item.quantity};
        return {items};
      }
      return {items: [...state.items, action.item]};
    }
    case 'REMOVE':
      return {
        items: state.items.filter(
          i => !(i.product.id === action.productId && i.size === action.size),
        ),
      };
    case 'UPDATE_QTY':
      return {
        items: state.items.map(i =>
          i.product.id === action.productId && i.size === action.size
            ? {...i, quantity: action.quantity}
            : i,
        ),
      };
    case 'CLEAR':
      return {items: []};
    default:
      return state;
  }
}

export const CartContext = createContext<CartContextType>({
  items: [],
  addItem: () => {},
  removeItem: () => {},
  updateQty: () => {},
  clearCart: () => {},
  totalItems: 0,
  totalPrice: 0,
});

export const CartProvider: FC<{children: ReactNode}> = ({children}) => {
  const [state, dispatch] = useReducer(cartReducer, {items: []});

  useEffect(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        dispatch({type: 'LOAD', items: JSON.parse(stored) as CartItem[]});
      }
    } catch {
      // no error
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
    } catch {
      // empty
    }
  }, [state.items]);

  const totalItems = state.items.reduce((s, i) => s + i.quantity, 0);
  const totalPrice = state.items.reduce((s, i) => s + i.product.price * i.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: state.items,
        addItem: item => dispatch({type: 'ADD', item}),
        removeItem: (productId, size) => dispatch({type: 'REMOVE', productId, size}),
        updateQty: (productId, size, quantity) =>
          dispatch({type: 'UPDATE_QTY', productId, size, quantity}),
        clearCart: () => dispatch({type: 'CLEAR'}),
        totalItems,
        totalPrice,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
