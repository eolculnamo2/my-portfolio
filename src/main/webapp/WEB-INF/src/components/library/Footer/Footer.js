import React from 'react';
import './Footer.scss';

const Footer = () => {
    return (
        <div className="Footer__wrap">
            <ul>
                <a href="https://www.linkedin.com/in/rob-bertram-1a2864133/"><li>LinkedIn</li></a>
                <a href="https://github.com/eolculnamo2"><li>GitHub</li></a>
                <a href="https://codepen.io/eolculnamo2/"><li>Codepen</li></a>
                <a href="https://codesandbox.io/u/eolculnamo2"><li>CodeSandbox</li></a>
            </ul>
            <p>&#9400; 2019 Rob Bertram. All rights reserved.</p>
        </div>
    )
}

export default Footer;