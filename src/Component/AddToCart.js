import React from "react";

const AddToCart = ({ onClick, val }) => {
    return (
        <button onClick={onClick}>{val}</button>
    );
}

export default AddToCart;