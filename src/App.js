import React from 'react';
// components
import Navbar from './components/navbar';
import BookList from './components/bookList';
import ThemeToogle from './components/themeToogle';
// context provider
import ThemeContextProvider from './contexts/themeContext';
import AuthContextProvider from './contexts/authContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <AuthContextProvider>
                    <Navbar/>
                    <BookList/>
                    <ThemeToogle/>
                </AuthContextProvider>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
