import { doc, onSnapshot } from "firebase/firestore";
import React, { createContext, useState } from "react";
import { db } from "../Connection/dbconfig";

const CartContext = createContext();

const CartProvider = ({ children }) => {
    const [cartItems, SetCartitems] = useState([]);
    const [previewName, SetPreviewName] = useState(null);
    const [previewPrice, SetPreviewPrice] = useState(null);
    const [previewImage, SetPreviewImage] = useState(null);
    const [previewDesc, SetPreviewDescription] = useState(null);
    const [key, SetKey]=useState(null);
    const [membership,setmembership]=useState(null);
    const [receipt, SetReceipt] = useState([]);
    if(key!==null){
        var document = doc(db, "Users", key)
    onSnapshot(document, (snapshot) => {
        setmembership(snapshot.data().membership);
    })
    }
    return (
        <CartContext.Provider value={{
            cartItems, SetCartitems,
            previewName, SetPreviewName,
            previewPrice, SetPreviewPrice,
            previewImage, SetPreviewImage,
            previewDesc, SetPreviewDescription,
            receipt, SetReceipt,
            key, SetKey,
            membership,setmembership
        }}>
            {children}
        </CartContext.Provider>
    );
}

export { CartContext, CartProvider };