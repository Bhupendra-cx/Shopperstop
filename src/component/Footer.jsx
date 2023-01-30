import React from "react";
import { Link } from "react-router-dom";
import '../All_sections_css/Footer.css';

export const Footer = () => {
    return(
        <footer>
            <div className="container">
                <div className="footer_top">
                    <ul>
                    <h2><Link to="/man">men</Link></h2>
                        <li><Link to="/#">lorem</Link></li>
                        <li><Link to="/#">lorem</Link></li>
                    </ul>
                    <ul>
                        <h2><Link to="/women">women</Link></h2>
                        <li><Link to="/#">lorem</Link></li>
                        <li><Link to="/#">lorem</Link></li>
                    </ul>
                    <ul>
                        <h2><Link to="/beauty">beauty</Link></h2>
                        <li><Link to="/#">lorem</Link></li>
                        <li><Link to="/#">lorem</Link></li>
                    </ul>
                    <ul>
                        <h2><Link to="/brands">brands</Link></h2>
                        <li><Link to="/#">lorem</Link></li>
                        <li><Link to="/#">lorem</Link></li>
                    </ul>
                    <ul>
                        <h2><Link to="/kids">kids</Link></h2>
                        <li><Link to="/#">lorem</Link></li>
                        <li><Link to="/#">lorem</Link></li>
                    </ul>
                </div>
                <div className="footer_bottom">
                    <div class="content">
                        <p> © 2022 Shoppers Stop Ltd. All rights reserved</p>
                        <span><a href="/term-condition">Terms of Use </a>| <a href="/privacy" target="_blank">Cookie &amp; Privacy Policy</a></span>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;