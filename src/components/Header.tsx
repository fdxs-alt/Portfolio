import React from 'react';
import {
    Navbar,
    NavbarList,
    NavLi,
    NavLink,
    ImageTag,
} from '../style/Layout.style';
import Image from '../images/f4be07fa-4fac-4d75-8549-9ec29cfa6720_200x200.png';
const Header = () => {
    return (
        <Navbar>
            <ImageTag src={Image} alt="my_logo" />
            <NavbarList>
                <NavLi>
                    <NavLink to="/">Home</NavLink>
                </NavLi>
                <NavLi>
                    <NavLink to="/blog">Blog</NavLink>
                </NavLi>
            </NavbarList>
        </Navbar>
    );
};

export default Header;
