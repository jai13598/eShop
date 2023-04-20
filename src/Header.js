import React from 'react'
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SearchIcon from '@mui/icons-material/Search';
import "./Header.css"
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="header">
            <Link to='/' style={{ textDecoration: "none" }}>
                <div className="header__logo">
                    <StorefrontIcon className='header__logoImage' fontSize='large' />
                    <h2 className="header__name">eSHOP</h2>
                </div>
            </Link>


            <div className="header__search">
                <input type='text' className='header__searchInput'></input>
                <SearchIcon className='header__searchIcon' />
            </div>

            <div className="header__nav">
                <div className="nav__item">
                    <span className="nav__itemLineOne">Hello</span>
                    <span className="nav__itemLinetwo">Sign In</span>
                </div>

                <div className="nav__item">
                    <span className="nav__itemLineOne">Your</span>
                    <span className="nav__itemLinetwo">shop</span>
                </div>

                <Link to='/checkout' style={{ textDecoration: "none" }}>
                    <div className="nav__item">
                        <ShoppingBasketIcon className='nav__itemBasket' />
                        <span className="nav__itemLinetwo nav__basketCount"> {basket.length}</span>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default Header