import React from 'react';
import './Header.scss';

class Header extends React.Component {
    render() {
        return(
            <div className="Header__main-wrap">
                <div className="max-layout Header__margin-auto">
                    <div className="Header__flex-wrap">
                        <div>
                            <h1>Rob Bertram</h1>
                            <p>Front End Web Developer</p>
                        </div>
                        <div>
                            <ul className="Header__links">
                                <li>Home</li>
                                <li>Articles</li>
                                <li>Portfolio</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;