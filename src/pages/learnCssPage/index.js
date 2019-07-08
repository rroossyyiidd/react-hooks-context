import React, {Component} from 'react';
//svg
import cirleImage from './circle.svg';
//style
import './style.css';

class LearnCssPage extends Component {

    /**
     * open menu from hamburger menu
     */
    openMenu = () => {
        // get class menu list
        const navLinks = document.querySelector('.nav-links');
        navLinks.classList.toggle('open');

        // get class menu li
        const links = document.querySelectorAll('.nav-links li');
        links.forEach(link =>{
            link.classList.toggle('fade')
        })
    };

    render() {
        return (
            <div>
                <nav>
                    {/*hamburger menu*/}
                    <div onClick={this.openMenu} className={`hamburger`}>
                        <div className={`line`}/>
                        <div className={`line`}/>
                        <div className={`line`}/>
                    </div>
                    {/*menu in navbar*/}
                    <ul className={`nav-links`}>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Projects</a></li>
                    </ul>
                </nav>
                {/*content*/}
                <section className={`landing`}>
                    <img src={cirleImage} alt="dots"/>
                    <h1>Dots</h1>
                </section>
            </div>
        );
    }
}

export default LearnCssPage;
