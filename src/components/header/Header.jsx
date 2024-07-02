import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import './header.css'

function Header() {
    const title = 'Kasa'
    return (
        <div className='header'>
            <img src={logo} alt='Kasa' className='logo' />
            <div className='nav'>
                <NavLink to="/"
                  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>
                 Accueil
                </NavLink>
                <NavLink to="/about"
                  className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""}>
                A propos
                </NavLink>
            </div>
        </div>
    )
}
 
export default Header