import React from "react";
import '../All_sections_css/Header.css'
import {BsSearch , BsFolderFill, BsFillBagFill, BsFillPersonFill} from "react-icons/bs";
import { Link } from "react-router-dom";

export const Header = () => {
    return(
        <header>
            <div className="container">
            <div className="main-nav">
                <ul className="left-side-nav">
                    <li><a href="/#">Social Impact</a></li>
                    <li><a href="/#">All Stores</a></li>
                    <li><a href="/#">Help & Support</a></li>
                </ul>
                <div className="right-side-nav">
                    <form>
                        <input type="search" name="" id="" placeholder="Search Products & Brands"/>
                        <button value="submit" className="btnsearch"><BsSearch /></button>
                    </form>
                    <ul className="nav-icons">
                        <li className="mobileWish">
                            <a href="/#" className="wishlist">
                                <BsFolderFill />
                            </a>
                        </li>
                        <li className="miniCart">
                            <a href="/#" className="bag-link">
                                <BsFillBagFill />
                            </a>
                        </li>
                        <li id="profileImage">
                            <a href="/#" className="user">
                                <BsFillPersonFill />
                            </a>
                        </li>
                    </ul>   
                </div>             
            </div>
            <nav>
                <ul className="top_nav">
                    <li><a href="/#" className="premium active">Categories</a></li>
                    <li><a href="/#">LUXE</a></li>
                    <li><a href="/#">BARGAINS</a></li>
                    <li><a href="/#">STYLE HUB</a></li>
                </ul>
                <div className="bottom_nav">
                    <Link to='/'>Home</Link>
                    <Link to='/man'>man</Link>
                    <Link to='/women'>women</Link>
                    <Link to='/beauty'>beauty</Link>
                    <Link to='/brands'>brands</Link>
                    <Link to='/kids'>kids</Link>
                </div>
            </nav>
        </div>
        </header>

    )
}

export default Header;