import React, {Component} from 'react';
// import theme context
import {ThemeContext} from '../contexts/themeContext';

class ThemeToogle extends Component {
    static contextType = ThemeContext;
    render() {
        // function toogleThemes
        const {toogleTheme} = this.context;
        return (
            <button onClick={toogleTheme}>
                Toogle the theme
            </button>
        );
    }
}

export default ThemeToogle;
