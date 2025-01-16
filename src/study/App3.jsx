import React, { useState } from 'react';

function App3(props) {
    const [name, setName] = useState("");
    const [nameInputValue, setNameInputValue] = useState("");

    const [gender, setGender] = useState("");
    const [genderInputValue, setgenderInputValue] = useState("male");

    const handleNameInputOnChange = (e) => {
        setNameInputValue(e.target.value);
    }
    
    const handleGenderInputOnChange = (e) => {
        setgenderInputValue(e.target.value);
    }

    const handleOkonClick = () => {
        setName(nameInputValue);
        setNameInputValue("");
        setGender(genderInputValue === "male" ? "남" : "여");
    }

    return (
        <div>
            <h1>이름: {name}({gender})</h1>
            <input type="text" onChange={handleNameInputOnChange} value={nameInputValue}/>
            <input type="radio" id="male" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "male"} value={"male"}/>
            <label htmlFor="male">남</label>
            <input type="radio" id="female" name="gender" onChange={handleGenderInputOnChange} checked={genderInputValue === "female"} value={"female"}/>
            <label htmlFor="female">여</label>
            <button onClick={handleOkonClick}>확인</button>
        </div>
    );
    // input에는 value는 필수
}

export default App3;