import React, {Component} from 'react';
// import context
import {ThemeContext} from '../contexts/themeContext';

class Navbar extends Component {
    render() {
        return (
            <ThemeContext.Consumer>{(context) => {
                // use consumer to access context data
                const {isLightTheme, light, dark} = context;
                const theme = isLightTheme ? light : dark;
                return (
                    <nav style={{background: theme.ui, color: theme.syntax}}>
                        <h1>Context App</h1>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact Us</li>
                        </ul>
                    </nav>
                )
            }}
            </ThemeContext.Consumer>
        );
    }
}

export default Navbar;
