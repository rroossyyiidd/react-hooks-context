import React from 'react';
// components
import Navbar from '../../components/navbar';
import BookList from '../../components/bookList';
import ThemeToogle from '../../components/themeToogle';
// context provider
import ThemeContextProvider from '../../contexts/themeContext';
import AuthContextProvider from '../../contexts/authContext';
//style
import './index.css'

function Index() {
    return (
        <div className="AppContext">
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

export default Index;
