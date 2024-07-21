import React, { useEffect, useState } from 'react';
import logo from './images/logo3.png'
import './NavbarBr.css'

function NavbarBr() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setIsScrolled(position > 100);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={'navB'}>
            <div className={`slider ${isScrolled ? 'expanded' : ''}`}></div>
            <div className={'navB-item'}>ICE CREAM</div>
            <div className={'navB-item'}>CAKES</div>
            <div className={'navB-item'}>STORE LOCATOR</div>
            <div className={'logo-container'}>
                <img className={'w-[120px] h-[120px]'} src={logo} alt="Logo"/>
            </div>
            <div className={'navB-item'}>CLUB 31</div>
            <div className={'navB-item'}>FRANCHISE</div>
            <div className={'navB-item'}>MEDIA ROOM</div>
        </nav>
    );
}

export default NavbarBr;