import { useEffect, useState } from 'react';
import appFirebase from '../backend/connectFirebase';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import '../styles/gallery.css'

const db = getFirestore(appFirebase)

export const GalleryImgs = () => {

    const [lista, setLista] = useState([])

    useEffect(() => {
      const getLista = async () => {
        try{
          const querySnapshot = await getDocs(collection(db, `Gallery`))
          const docs = []
          querySnapshot.forEach((doc) => {
            docs.push({...doc.data(), id: doc.id})
          })
          setLista(docs)
        }catch(err){
          console.log(err)
        }
      }
      getLista()
    }, [lista])
  
  return (
    <div className='container'>
        <section className='containerImgs'>
            {lista.map((list) => (
                        <img className='imgs' src={list.image} alt={list.name}  key={list.id}/>
            ))}
        </section>
    </div>

  )
}
