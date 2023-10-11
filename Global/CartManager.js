import React, { createContext, useState } from "react";

const CartContext = React.createContext();

const CartProvider = ({ children }) => {
    const [cartItems, SetCartitems] = useState([]);
    const [previewName, SetPreviewName] = useState(null);
    const [previewPrice, SetPreviewPrice] = useState(null);
    const [previewImage, SetPreviewImage] = useState(null);
    const [previewDesc, SetPreviewDescription] = useState(null);
    const [receipt, SetReceipt] = useState([]);
    return (
        <CartContext.Provider value={{
            cartItems, SetCartitems,
            previewName, SetPreviewName,
            previewPrice, SetPreviewPrice,
            previewImage, SetPreviewImage,
            previewDesc, SetPreviewDescription,
            receipt, SetReceipt
        }}>
            {children}
        </CartContext.Provider>
    );
}



export { CartContext, CartProvider };