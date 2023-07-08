import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../button/Button';
import { AuthContext } from '../../../context';

export const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    const leave = () => {
        setIsAuth(false)
        localStorage.removeItem("auth")
    }
    return(
        <div className="navbar">
            <div className="navbar__links">

                <Link className="navbar__link" to="/about">ABOUT</Link>
                <Link className="navbar__link" to="/posts">POSTS</Link>
                <Button onClick={() => leave()} >Leave</Button>

            </div>
        </div>
    )
}

export default Navbar;