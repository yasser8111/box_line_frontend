import React, { createContext, useState, useEffect, useContext } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("boxline_cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("boxline_cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product, options) => {
    // Generate a unique ID for this cart entry to avoid conflicts
    const cartItemId = `${product.id}-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    
    // Calculate price for this customized option
    const basePrice = product.price || 1.5; // per unit default
    
    // Simple custom pricing logic based on specs:
    // Quantity discount: the larger the quantity, the cheaper per unit.
    let unitMultiplier = 1.0;
    
    // Add cost based on paper type
    if (options.paperType === "kraft_heavy" || options.paperType === "glossy_heavy") {
      unitMultiplier += 0.3;
    } else if (options.paperType === "luxury") {
      unitMultiplier += 0.6;
    }

    // Add cost based on sizing (surface area)
    if (options.size === "custom" && options.customDimensions) {
      const { w, h, d } = options.customDimensions;
      const surfaceArea = (w * h + h * d + w * d) * 2; // in cm2
      if (surfaceArea > 1000) unitMultiplier += 0.5;
      else if (surfaceArea > 500) unitMultiplier += 0.2;
    } else if (options.size === "A4") {
      unitMultiplier += 0.2;
    } else if (options.size === "A3") {
      unitMultiplier += 0.4;
    }

    // Add cost based on thickness
    if (options.thickness === "350g") {
      unitMultiplier += 0.25;
    } else if (options.thickness === "400g") {
      unitMultiplier += 0.4;
    }

    // Add cost for spot UV or gold foil
    let extraFlatFee = 0;
    if (options.finish === "gold_foil") {
      unitMultiplier += 0.2;
      extraFlatFee += 50; // setup fee
    } else if (options.finish === "spot_uv") {
      unitMultiplier += 0.15;
      extraFlatFee += 40; // setup fee
    }

    // Design service cost
    if (options.designService === "needed") {
      extraFlatFee += 100;
    }

    // Bulk discount factor
    const quantity = parseInt(options.quantity) || 100;
    let bulkDiscount = 1.0;
    if (quantity >= 2000) bulkDiscount = 0.65; // 35% discount
    else if (quantity >= 1000) bulkDiscount = 0.75; // 25% discount
    else if (quantity >= 500) bulkDiscount = 0.85; // 15% discount
    else if (quantity >= 250) bulkDiscount = 0.92; // 8% discount

    const unitPrice = parseFloat((basePrice * unitMultiplier * bulkDiscount).toFixed(2));
    const totalPrice = parseFloat((unitPrice * quantity + extraFlatFee).toFixed(2));

    const newItem = {
      cartItemId,
      product: {
        id: product.id,
        name: product.name,
        image: product.image,
        category: product.category,
      },
      options: {
        ...options,
        unitPrice,
        extraFlatFee,
      },
      quantity,
      price: totalPrice,
    };

    setCart((prevCart) => [...prevCart, newItem]);
  };

  const removeFromCart = (cartItemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.cartItemId !== cartItemId));
  };

  const updateQuantity = (cartItemId, newQty) => {
    if (newQty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.cartItemId !== cartItemId) return item;
        
        // Recalculate cost with new quantity
        const { unitPrice, extraFlatFee } = item.options;
        const totalPrice = parseFloat((unitPrice * newQty + extraFlatFee).toFixed(2));
        
        return {
          ...item,
          quantity: newQty,
          price: totalPrice,
        };
      })
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartTotal = () => {
    return parseFloat(cart.reduce((total, item) => total + item.price, 0).toFixed(2));
  };

  const getCartItemsCount = () => {
    return cart.reduce((count, item) => count + item.quantity, 0);
  };

  const getCartPositionsCount = () => {
    return cart.length;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        getCartTotal,
        getCartItemsCount,
        getCartPositionsCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
