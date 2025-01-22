/**@jsxImportSource @emotion/react */
import axios from 'axios';
import * as s from './style';
import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';

function SigninPage(props) {
    const [inputRefs] = useState([useRef(), useRef(), useRef(), useRef()]);
    const [buttonRefs] = useState([useRef() ]);
    const [inputValue, setInputValue] = useState({
        username: "",
        password: "",
        name: "",
        email: "",
    });

    const handleInputOnChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    }

    const handleInputOnKeyDown = (e) => {
        if(e.keyCode === 13) {
            let foundIndex = -1;
            for(let i = 0; i < inputRefs.length; i++) {
                if(inputRefs[i].current === e.target) {
                    foundIndex = i;
                    break;
                }
            }
            // 마지막 인덱스에서 엔터를 눌리면 가입버튼 클릭되는 함수수
            // inputRefs. length - 1 마지막 인덱스
            if(foundIndex === inputRefs. length - 1) {
                buttonRefs[0].current.click();
                return;
            }
            inputRefs[foundIndex + 1].current.focus();
        }
    }

    const handleSigninSubmitOnClick = async () => {
        try {
            const response = axios.post("http://localhost:8080/servlet_study_war/api/signup", inputValue);
        } catch(error) {
            console.log(error);
        }
    }


    return (
        <div css={s.layout}>
            <div css={s.main}>
                <input type="text" 
                    placeholder='사용자 이름' 
                    name='username' 
                    value={inputValue.username} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnKeyDown} 
                    ref={inputRefs[0]}/>
                <input type="password" 
                    placeholder='비밀번호' 
                    name='password' 
                    value={inputValue.password} 
                    onChange={handleInputOnChange} 
                    onKeyDown={handleInputOnKeyDown} 
                    ref={inputRefs[1]}/>
                <button onClick={handleSigninSubmitOnClick} ref={buttonRefs[0]}>가입</button>
            </div>
            <div css={s.footer}>
                <span>계정이 없으신가요? </span>
                <Link to={"/signup"}>회원가입</Link>
            </div>
        </div>
    );
}

export default SigninPage;