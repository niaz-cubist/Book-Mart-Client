import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Firebase/AuthProvider';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext)

    const [dark, setdark] = useState(false)
    const handleDark = () => {
        setdark(!dark)
        localStorage.setItem('dark-mode', !dark)
    }

    useEffect(() => {
        if (dark) {
            document.querySelector('html').setAttribute("data-theme", "dark")
        }
        else {
            document.querySelector('html').setAttribute("data-theme", "mytheme")
        }
    }, [dark])

    useEffect(() => {
        const localDark = JSON.parse(localStorage.getItem('dark-mode'))
        setdark(localDark)
    }, [])

    const handleLogout = () => {
        logout()
            .then(() => { })
            .catch(error => console.error(error))
    }
    const menuItems = <>
        <li><Link to='/'>Home</Link></li>

        <li><Link to='/blog'>Blog</Link></li>
        {user?.uid ?
            <>
                <li><button onClick={handleLogout}>log out</button></li>
                <li><Link to='/dashboard'>Dashboard</Link></li>
            </>
            : <li><Link to='/login'>Login</Link></li>}
        <li>
            <label className="label cursor-pointer">
                <span className="label-text">Dark mode</span>
                <input type="checkbox" onClick={handleDark} className="toggle" checked />
            </label>
        </li>
    </>
    return (
        <div className='mx-auto my-8 w-9/12'>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {menuItems}
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost normal-case text-xl">Book Mart</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>

            </div>
        </div>
    );
};

export default NavBar;