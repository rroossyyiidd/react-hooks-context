import React, {useContext} from 'react';
// import theme context
import {ThemeContext} from '../contexts/themeContext';

// context in class component
// class ThemeToogle extends Component {
//     static contextType = ThemeContext;
//     render() {
//         // function toogleThemes
//         const {toogleTheme} = this.context;
//         return (
//             <button onClick={toogleTheme}>
//                 Toogle the theme
//             </button>
//         );
//     }
// }

// context in functional component
const ThemeToogle = () => {
    const {toogleTheme} = useContext(ThemeContext);
    return (
        <button onClick={toogleTheme}>
            Toogle the theme
        </button>
    );
};

export default ThemeToogle;
