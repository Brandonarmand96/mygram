import { useState, useEffect } from "react";
import { projectStorage, projectFirestore, timestamp } from '../firebase/config';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { collection, doc, setDoc } from "firebase/firestore";



function useStorage(file) {
    const [progress, setProgress] = useState(0);
    const [error, setError] = useState(null);
    const [url, setUrl] = useState(null);

    useEffect(() => {
        //references
        const storageRef = ref(projectStorage, file.name);


        // Add a new document with a generated id.
        const collectionRef = doc(collection(projectFirestore, "images"));

        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on('state_changed', (snap) => {
            let percentage = (snap.bytesTransferred / snap.totalBytes) * 100
            setProgress(percentage);
        }, (err) => {
            setError(err);
            //get download link
        }, () => {
            getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                const time = timestamp;
                setDoc(collectionRef, {
                    imgUrl: url,
                    createdAt: time
                })
                setUrl(url);
            })
        })
    }, [file]);
    return { progress, url, error }
}


export default useStorage;