import { NavLink } from 'react-router-dom'
import '../styles/bar.css'

export const BarNavegation = () => {

    const reload = () =>{
        window.location.href='/'
    }

  return (
    <div className='barNavegation'>
        <div className='userNav'>
            <span className='imgProfile'><img className='photo' src="../img/galeria.png" alt="" /></span>
            <h3 className='user'>heartImage</h3>
        </div>
        <div className='nav'>
            <nav>
                <ul>
                    <NavLink className='navLink' to={'/'} onClick={reload} >
                        <img id='home' className='home' src='././public/img/hogar.png'/>
                    </NavLink>
                    <NavLink className='navLink' to={'/Login'} >Log in</NavLink>
                </ul>
            </nav>
        </div>
    </div>
  )
}