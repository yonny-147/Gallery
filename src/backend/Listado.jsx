import { useState } from 'react'
import Axios from 'axios'
import '../styles/listado.css'

export const Listado = () => {

const [usuarios, setUsuarios] = useState([])

  const getUsuarios = () => {
    Axios.get('http://localhost:3000/usuarios').then((res)=>{
      setUsuarios(res.data)
    })
  }   

  const deleteUsuarios = (id) => {
    Axios.delete(`http://localhost:3000/delete/${id}`).then(()=>{
    })}
  
  getUsuarios()
  
  return (
    <>
    <h1 className='tittleList'>Registered users in the gallery</h1>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Age</th>
          <th>Email</th>
          <th>Password</th>
        </tr>
      </thead>
      
      {
        usuarios.map((usuario) => {
          return(
            <tbody key={usuario.id}>
              <tr >
                <td>{usuario.id}</td>
                <td>{usuario.username}</td>
                <td>{usuario.age}</td>
                <td>{usuario.email}</td>
                <td>{usuario.password}</td>
                <td>   
                  <button className='deleteBtn' onClick={() => {
                    deleteUsuarios(usuario.id)
                    }}>
                    <img className='deleteImg' src="././public/img/borrar.png" alt="borrar"/>
                  </button>
                </td>
              </tr>
         </tbody>
        )})
      }

    </table>
 
    </>
    )
}

