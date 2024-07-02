import logoWhite from '../../assets/logo_white.svg'
import './footer.css'

function Footer() {
    return (
        <div className='footer'>
            <img src={logoWhite} alt='Kasa' className='logo' />
            <div className='copyrights'>
                <p>© 2020 Kasa. All rights reserved</p>
            </div>
        </div>
    )
}

export default Footer
