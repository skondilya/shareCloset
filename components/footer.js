import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="https://github.com/LouiseNyambati" target="_blank">Louise Nyambati</a>
                <span>  /  </span>
                <a href="https://github.com/ait530" target="_blank">Aaron Trierweiler</a>
                <span>  /  </span>
                <a href="https://github.com/skondilya" target="_blank">Shreya Kondilya</a>
            </p>
            <p>&copy; 2017 <strong>ShareCloset</strong> - Your destination for prom dresses</p>
        </footer>
    )
};

export default Footer;
