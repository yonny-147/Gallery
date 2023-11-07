import { useEffect, useState } from "react"
import { fbStorage, fbFirestore } from '../backend/connectFirebase'
import { addDoc } from "firebase/firestore";

export const useStorage = (file) => {

    const [progress, setProgress] = useState(0)
    const [error, setError] = useState(null)
    const [url, setUrl] = useState(null)

    useEffect(() => {
        const storageRef = fbStorage.ref(file.name);
        const collectionRef = fbFirestore.collection('Images');
      
        storageRef.put(file).on('state_changed', (snap) => {
          let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
          setProgress(percentage);
        }, (err) => {
          setError(err);
        }, async () => {
          const url = await storageRef.getDownloadURL();
          await addDoc(collectionRef, { url: url }); // Agregar URL a Firestore
          setUrl(url);
        });
      }, [file]);
      
    return { progress, url , error}
    
}


export default useStorage
