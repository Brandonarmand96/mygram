import { useState, useEffect } from "react";
import { projectFirestore } from "../firebase/config";
import { collection, query, onSnapshot, orderBy } from "firebase/firestore";


function useFirestore(imgCollecton) {
    const [imgs, setImgs] = useState([]);


    useEffect(() => {


        const queryRef = query(collection(projectFirestore, "images"), orderBy('createdAt', 'desc'));
        const unsub = onSnapshot(queryRef, (querySnapshot) => {
            const images = [];
            querySnapshot.forEach((img) => {
                images.push({...img.data(), id: img.id });
            });
            setImgs(images);
        });



        return () => unsub();
    }, [imgCollecton])

    return { imgs };

}


export default useFirestore;