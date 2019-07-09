import React, {useContext} from 'react';
// import context
import {ThemeContext} from '../contexts/themeContext';

// class BookList extends Component {
//     // access the context
//     static contextType = ThemeContext;
//
//     render() {
//         const {isLightTheme, light, dark} = this.context;
//         const theme = isLightTheme ? light : dark;
//         return (
//             <div className={`book-list`} style={{color: theme.syntax, background: theme.bg}}>
//                 <ul>
//                     <li style={{background: theme.ui}}>Buku 1</li>
//                     <li style={{background: theme.ui}}>Buku 2</li>
//                     <li style={{background: theme.ui}}>Buku 3</li>
//                 </ul>
//             </div>
//         );
//     }
// }

//functional component
const BookList = () => {
    // use context in functional component in react hooks
    const {isLightTheme, light, dark} = useContext(ThemeContext);
    const theme = isLightTheme ? light : dark;
    return (
        <div className={`book-list`} style={{color: theme.syntax, background: theme.bg}}>
            <ul>
                <li style={{background: theme.ui}}>Buku 1</li>
                <li style={{background: theme.ui}}>Buku 2</li>
                <li style={{background: theme.ui}}>Buku 3</li>
            </ul>
        </div>
    )
};

export default BookList;
