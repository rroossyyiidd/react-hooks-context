import React, {createContext, useState} from 'react';

// create context
export const BookContext = createContext();

// functional component context provider
const BookContextProvider = (props) => {
    const [books, setBooks] = useState([
        {
            title: 'buku 1', id: 1
        },
        {
            title: 'buku 2', id: 2
        },
        {
            title: 'buku 3', id: 3
        },
        {
            title: 'buku 4', id: 4
        }
    ]);

    return (
        <BookContext.Provider value={{books}}>
            {props.children}
        </BookContext.Provider>
    )
};

export default BookContextProvider;
