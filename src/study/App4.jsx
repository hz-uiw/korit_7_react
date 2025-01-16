import React, { useState } from 'react';

function App4(props) {
    const [userInfo, setUserInfo] = useState({
        name: "",
        gender: "",
    });

    const [inputValue, setInputValue] = useState({
        name: "",
        gender: "male",
    });

    const handleInputOnChange = (e) => {
        // const name = e.target.name;
        // const value = e.target.value;
        const {name, value} = e.target;

        setInputValue({
            ...inputValue,
            [name]: value,
        });
    }

    const handleOkonClick = () => {
        setUserInfo({
            name: inputValue.name,
            gender: inputValue.gender === "male" ? "남" : "여",
        })
        setInputValue({
            ...inputValue,
            name: "",
        });
    }

    return (
        <div>
            <h1>이름: {userInfo.name}({userInfo.gender})</h1>
            <input type="text" name="name" onChange={handleInputOnChange} value={inputValue.name}/>
            <input type="radio" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" name="gender" onChange={handleInputOnChange} checked={inputValue.gender === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOkonClick}>확인</button>
        </div>
    );
    // input에는 value는 필수
}

export default App4;