import './navbar.scss';

import { Link, NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';

import hamIcon from '/shared/icon-hamburger.svg';
import closeIcon from '/shared/icon-close.svg';
import logoIcon from '/shared/logo.svg';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    useEffect(() => {
        if (showMenu) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showMenu]);

    return (
        <nav>
            <Link to="/">
                <div className="logo">
                    <img src={logoIcon} alt="logo icon" />
                </div>
            </Link>
            <div className="divider"></div>
            <div
                className="nav-icon"
                onClick={() => setShowMenu((prev) => !prev)}
            >
                {!showMenu ? (
                    <img src={hamIcon} alt="ham icon" />
                ) : (
                    <img src={closeIcon} alt="close icon" />
                )}
            </div>
            <ul className="nav-links">
                <div className="bg-blur"></div>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'nav-link active'
                            : 'nav-link'
                    }
                >
                    <span>00</span>
                    Home
                </NavLink>
                <NavLink
                    to="/destination"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'nav-link active'
                            : 'nav-link'
                    }
                >
                    <span>01</span>
                    Destination
                </NavLink>
                <NavLink
                    to="/crew"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'nav-link active'
                            : 'nav-link'
                    }
                >
                    <span>02</span>
                    Crew
                </NavLink>
                <NavLink
                    to="/technology"
                    className={({ isActive, isPending }) =>
                        isPending
                            ? 'pending'
                            : isActive
                            ? 'nav-link active'
                            : 'nav-link'
                    }
                >
                    <span>03</span>
                    Technology
                </NavLink>
            </ul>
            <ul
                className={
                    showMenu
                        ? 'nav-links-dropdown active'
                        : 'nav-links-dropdown'
                }
            >
                <div className="bg-blur"></div>
                <ul>
                    <Link className="nav-link" to="/">
                        <span>01</span> Home
                    </Link>
                    <Link className="nav-link" to="/destination">
                        <span>02</span> Destination
                    </Link>
                    <Link className="nav-link" to="/crew">
                        <span>02</span> Crew
                    </Link>
                    <Link className="nav-link" to="/technology">
                        <span>03</span> Technology
                    </Link>
                </ul>
            </ul>
        </nav>
    );
}

export default Navbar;
