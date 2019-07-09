import React, {useContext} from 'react';
// import contexts
import {ThemeContext} from '../contexts/themeContext';
import {AuthContext} from '../contexts/authContext';

// multiple context in class component
// class Navbar extends Component {
//     render() {
//         return (
//             <AuthContext.Consumer>{(authContext) => (
//                 <ThemeContext.Consumer>{(themeContext) => {
//                     // use consumer to access context data
//                     const {isAuthenticated, toggleAuth} = authContext;
//                     const {isLightTheme, light, dark} = themeContext;
//                     const theme = isLightTheme ? light : dark;
//                     return (
//                         <nav style={{background: theme.ui, color: theme.syntax, height: 150}}>
//                             <h1>Context App</h1>
//                             <div onClick={toggleAuth}>
//                                 {isAuthenticated ? 'Logged in' : 'Logged out'}
//                             </div>
//                             <ul>
//                                 <li>Home</li>
//                                 <li>About</li>
//                                 <li>Contact Us</li>
//                             </ul>
//                         </nav>
//                     )
//                 }}
//                 </ThemeContext.Consumer>
//             )}
//             </AuthContext.Consumer>
//         );
//     }
// }

// multiple context in functional component
const Navbar = () => {
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const {isAuthenticated, toggleAuth} = useContext(AuthContext);
    const theme = isLightTheme ? light : dark;
    return (
        <nav style={{background: theme.ui, color: theme.syntax, height: 150}}>
            <h1>Context App</h1>
            <div onClick={toggleAuth}>
                {isAuthenticated ? 'Logged in' : 'Logged out'}
            </div>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
            </ul>
        </nav>
    )
};

export default Navbar;
