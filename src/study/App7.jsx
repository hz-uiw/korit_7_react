import React, { useState } from 'react';
import "./styles/app7.css";

function App7(props) {
    const [bookList, setBookList] = useState([]);

    const [registerInputValue, setRegisterInputValue] = useState({
        bookName: "",
        author: "",
        publisher: "",
    })

    const handleRegisterInputOnchange = (e) => {
        setRegisterInputValue({
            ...registerInputValue,
            [e.target.name]: e.target.value,
        });
    }
    
    const handleRegisterButtonOnClick = () => {
        setBookList([
            ...bookList,
            registerInputValue,
        ]);
        alert("등록 완료");
        setRegisterInputValue({
            bookName: "",
            author: "",
            publisher: "",
        });
    }

    const [bookTableList, setBookTableList] = useState([]);
    const [searchValue, setSearchValue] = useState({
        select: "",
        text: "",
    });

    const handleSearchValueOnChange = (e) => {
        setSearchValue()
    }

    return (
        <div className='container'>
            <div>
                <h1>도서정보 등록</h1>
                <div className='register-input'>
                    <input type="text" placeholder='도서명' name='bookName' value={registerInputValue.bookName} onChange={handleRegisterInputOnchange}/>
                    <input type="text" placeholder='저자명' name='author' value={registerInputValue.author} onChange={handleRegisterInputOnchange}/>
                    <input type="text" placeholder='출판사' name='publisher' value={registerInputValue.publisher} onChange={handleRegisterInputOnchange}/>
                    <button onClick={handleRegisterButtonOnClick}>등록</button>
                </div>
            </div>
            <div>
                <h1>도서정보 조회</h1>
                <div className='search-items'>
                    <select name="select" onChange={handleSearchValueOnChange}>
                        <option value="">도서명</option>
                    </select>
                    <input type="text" name='text' value={searchValue.text} onChange={handleSearchValueOnChange}/>
                    <button onClick={}>검색</button>
                </div>
                <table className='book-table'>
                    <thead>
                        <tr>
                            <th>도서명</th>
                            <th>저자명</th>
                            <th>출판사</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookTableList.map(book => 
                                <tr>
                                    <td>{book.bookName}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default App7;