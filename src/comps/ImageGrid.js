import React from 'react';
import useFirestore from '../hooks/useFirestore';

function ImageGrid(setSelectedImg) {

    const { imgs } = useFirestore('images');
    console.log(imgs)

    return ( <
        div className = "img-grid" > {
            imgs && imgs.map(img => ( <
                div className = "img-wrap"
                key = { img.id }
                onClick = {
                    () => setSelectedImg(img.url) } >
                < img src = { img.url }
                alt = "mygram" / > < /div>
            ))
        } < /div>
    )
}



export default ImageGrid;