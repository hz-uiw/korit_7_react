import React, { useState } from 'react';
import Signin from './components/sign/Signin/Signin';
import Signup from './components/sign/Signup/Signup';

function App6(props) {

    // 선택적 렌더링 경로
    const [path, setPath] = useState("signin");

    const [userList, setUserList] = useState([]);

    // 이벤트 값이 있을 경우 사용법 포함
    const handlePageChangeButtonOnClick = (e, path) => {
        setPath(path);
    }
    
    return (
        <div>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signin")}>로그인</button>
            <button onClick={(e) => handlePageChangeButtonOnClick(e, "signup")}>회원가입</button>
            {
                path === "signin" && <Signin userList={userList}/>
            }
            {
                path === "signup" && <Signup userList={userList} setUserList={setUserList}/>
            }
            
        </div>
    );
}

export default App6;