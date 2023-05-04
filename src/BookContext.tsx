import React from 'react';

interface Book {
    id: number;
    title: string;
    author: string;
}

interface BookContextType {
    books: Book[];
    addBook: (book: Book) => void;
}

// sets some default values for context
const BookContext = React.createContext<BookContextType>({
    books: [],
    addBook: () => {}
})

export default BookContext;