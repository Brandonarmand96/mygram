import React from "react";



function Modal(selectedImg, setSelectedImg) {


    function handleClick(e) {
        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null);
        }
    }

    return ( <
        div className = "backdrop" >
        <
        img src = { selectedImg }
        alt = "mygram enlarged" / >
        <
        /div>
    )
}



export default Modal;