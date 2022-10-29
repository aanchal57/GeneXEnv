import React, { useState, useEffect } from 'react';
import logo from '../assets/logo.jpg';
import './Navbar.css';
import { Link } from 'react-router-dom';
import Button from './Button';

const Navbar = () => {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    const [logoSize, setLogoSize] = useState(80);

    const clickHandler = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth<=960) {
            setButton(false);
            setLogoSize(80);
        } else {
            setButton(true);
            setLogoSize(80);
        }
    };

    useEffect(() => {showButton()}, [])

    window.addEventListener('resize', showButton);

    return (
        <React.Fragment>
            <div className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='navbar-logo'><div><img src={logo} width={logoSize} height={logoSize} alt="logo_IITJ"/></div></Link>
                    <div className='menu-icon nav-item' onClick={clickHandler}><i className={click ? 'fas fa-times' : 'fas fa-bars'} /></div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'><Link to="/" className="nav-links" onClick={closeMobileMenu}>Home</Link></li>
                        <li className='nav-item'><Link to="/about" className="nav-links" onClick={closeMobileMenu}>About</Link></li>
                        <li className='nav-item'><Link to="/contact-us" className="nav-links" onClick={closeMobileMenu}>Contact Us</Link></li>
                    </ul>
                    {button && <Button buttonStyle='btn--outline'>Sign UP</Button>}
                </div>
            </div>
        </React.Fragment>
    )
}

export default Navbar