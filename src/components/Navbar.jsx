import React from "react";
import Logo from "./Logo";

const Navbar = ({ onNavLink }) => {
    return (
        <div className={'navbar'}>
            <div className={'container-nav'}>
                <div onClick={() => onNavLink('home')} className={'brand'}>
                    <Logo />
                </div>
                <div className={'menu'}>
                    <a onClick={() => onNavLink('about')} className={'nav-link'}>
                        About
                    </a>
                    <a className={'nav-link'}>
                        Services
                    </a>
                    <a className={'nav-link'}>
                        Portfolio
                    </a>
                    <button className={'nav-button'}>
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
