import React, { useState } from 'react';
import BookSearch from './components/book/BookSearch/BookSearch';
import BookRegister from './components/book/BookRegister/BookRegister';
import "./styles/app8.css";
function App8(props) {
    
    const [bookList, setBookList] = useState([]);

    return (
        <div className='container'>
            <BookRegister bookList={bookList} setBookList={setBookList}/>
            <BookSearch />
        </div>
    );
}

export default App8;