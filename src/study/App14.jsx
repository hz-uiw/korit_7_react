import axios from 'axios';
import React from 'react';

// npm install axios
function App14(props) {

    const handleRequestOnClick = async () => {
        let response = null;
        try {
            response = await axios.get("http://localhost:8080/servlet_study_war/api/user");
            console.log(response);
            console.log(response.data.username);
        } catch(error) {
            console.error(error);
        }
    }

    /*
        BokRestServlet(api/book)
        get 요청
            bookId,
            bookName,
            author,
            publisher,
            category,
            imgUrl
    */
    const handleBookRequestOnClick = async() => {
        let response = null;
        try {
            response = await axios.get("http://localhost:8080/servlet_study_war/api/book")
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <button onClick={handleRequestOnClick}>요청</button>
            <button onClick={handleBookRequestOnClick}>도서 요청</button>
        </div>
    );
}

export default App14;