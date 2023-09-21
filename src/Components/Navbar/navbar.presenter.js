import { useState } from "react";

export const useNavbar=()=>{
    const [cart, setCart] = useState(() => {
    const storedCart = localStorage.getItem('cart');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  return {
    cart
  }
}