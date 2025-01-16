import React from 'react';
import BookSearch from './components/book/BookSearch/BookSearch';
import BookRegister from './components/book/BookRegister/BookRegister';

function App8(props) {
    
    const [bookList, setBookList] = useState([]);
    const [bookTableList, setBookTableList] = useState([]);

    return (
        <div>
            <BookRegister />
            <BookSearch />
        </div>
    );
}

export default App8;