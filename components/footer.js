import React, {Component} from 'react';

const Footer = (props) =>{
    return(
        <footer>
            <p className="footer-links">
                <a href="" target="_blank">Say Hi on Twitter</a>
                <span>  /  </span>
                <a href="" target="_blank">View Source on Github</a>
                <span>  /  </span>
                <a href="" target="_blank">Read My Blog</a>
            </p>
            <p>&copy; 2017 <strong>ShareCloset</strong> - Your destination for prom dresses</p>
        </footer>
    )
};

export default Footer;
