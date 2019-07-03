import React from 'react';
// components
import Navbar from './components/navbar';
import BookList from './components/bookList';
import ThemeToogle from './components/themeToogle';
// context provider
import ThemeContextProvider from './contexts/themeContext';

function App() {
    return (
        <div className="App">
            <ThemeContextProvider>
                <Navbar/>
                <BookList/>
                <ThemeToogle/>
            </ThemeContextProvider>
        </div>
    );
}

export default App;
