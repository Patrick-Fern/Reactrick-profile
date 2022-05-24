import React from "react";
import Github from '../assets/images/github.png';
import Linkdin from '../assets/images/linkdin.png';

const Footer = () => {
    return (
        <footer>
            <a href="https://github.com/Patrick-Fern" target="_blank"><img src={Github} alt="github icon" /></a>
            <a href="https://www.linkedin.com/in/patrick-fernbach-b439b3108/" target="_blank"><img src={Linkdin} alt="linkdin icon" /></a>
        </footer>
    );
};

export default Footer;