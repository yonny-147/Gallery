import '../styles/gallery.css'
import appFirebase from '../backend/connectFirebase'
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { useState } from 'react'

const db = getFirestore(appFirebase)
const storage = getStorage(appFirebase)

export const FormGallery = () => {

    let urlImgDesc

    const [file, setFile] = useState(null)
    const [error, setError] = useState(false);
    const [messageError, setMessageError] = useState('')

    const typeImages = ['image/png', 'image/jpg', 'image/jpeg']


    const isImageValid = (file) => {
        if(file && typeImages.includes(file.type)){
            setError(false)
        return true
        }else {
            setError(true)  
            setMessageError('File is incorrect')
        return false
        }
    }

    const addImage = (e) => {
        document.getElementById('file').click()
        e.preventDefault()
    }
    
    const saveData = async(e) => {
        e.preventDefault()
        
        const name = e.target.name.value

        const newImage = {
            name: name,
            image: urlImgDesc
        } 
        //funcion de guardado
        try{
            await addDoc(collection(db, 'Gallery'),{
            ...newImage
            })
        }catch(error){
            console.log(error)
        }

        e.target.name.value = '';
        e.target.file.value = '';
    }

    
    const fileHandler = async (e) => {
        //detectar archivo
        const file = e.target.files[0];

        //cargar archivo
        const refArchivo = ref(storage, `Images/${file.name}`)
        await uploadBytes(refArchivo, file)
        //obtener la imagen de la url
        urlImgDesc = await getDownloadURL(refArchivo)

        //validar imagen
        const valid = isImageValid(file)
        if (valid) {
            console.log('image upload')
        }else {
            setFile(null)
        }
    }
    
    const downSignup = () => {
        window.scrollBy({
          top: 700,
          behavior: 'smooth',
        });
      }

  return (
    <div className='containerForm'>
        <form className='inputs' onSubmit={saveData}>
            <h1 className="tittle">My Gallery</h1>
            <div className='inputFile'>
                <input id='file' className='fil' type="file" onChange={fileHandler}/>
                <button className='btnAdd btnAddImage'onClick={addImage}>Upload image</button>
                <input id='name' className='fileText' type="text" placeholder="Digite el nombre de la imagen" />
            </div>
            {error &&   <div className='errors'>
                            <p className='alert'>Error: </p>  
                            <p className='error'>{ messageError}</p>
                        </div>}
            <button className='btnAdd addImgGallery'>Add image to gallery</button>
        </form>
        <button className='btnDown' onClick={downSignup}>
          <img src="../img/avance-rapido.png" alt="" />
        </button>
    </div>
  )
}
