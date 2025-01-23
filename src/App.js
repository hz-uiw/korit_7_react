import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import WritePage from './pages/WritePage/WritePage';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import ListPage from './pages/ListPage/ListPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { authUserIdState } from './atoms/authAtom';
import { useQuery } from 'react-query';

function App() {
  // 상태 저장
  // const [userId, setUserId] = useRecoilState(authUserIdState);
  const location = useLocation();
  
  const authenticatedUser = async () => {
    // let response = null;
    // try {
    //   const response = await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
    //     headers: {
    //       "Authorization": `Bearer ${localStorage.getItem("Access Token")}`,
    //     }
    //   });
    // } catch(error) {
    //   console.error(error);
    // }
    // return response;
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
      }
    });
  } 

  const authenticatedUserQuery = useQuery( // userQuery -> useEffect와 비슷하게 사용
    ["authenticatedUserQuery"], // useQuery 변수명을 대괄호 안에 입력
    // 렌더링 후에 authenticatedUser 함수 실행
    authenticatedUser,
    {
      // // Promise - then과 같은 개념, response가 응답하면 userId 변경경
      // onSuccess: (response) => {
      //   console.log(response);
      //   setUserId(response.data.body);
      // },
      // // Promise - catch과 같은 개념, response가 무응답이거나 error가 뜨면 userId를 0으로 설정
      // onError: (error) => {
      //   console.error(error)
      //   setUserId(0);
      // },
      // enabled가 true 값이 돼야 요청이 날라감
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"),
    }
  );

  return (
    <>
      <Global styles={global}/>

    {
      authenticatedUserQuery.isLoading 
      ? 
        <></>
      :
    <MainLayout>
      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/write' element={<WritePage />}/>
        <Route path='/list' element={<ListPage />}/>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/signin' element={<SigninPage />} />
      </Routes>
    </MainLayout>
    }
    </>
  );
}

export default App;
// npm install react-router-dom
// npm install @emotion/react

// vscode-styled-component

// npm install react-icons
// npm install react-quill


// file > preferences > configure snippets > javascriptjson.json에서 설정
// "Emotion": {
//   "Print to console": {
//     "prefix": "ej",
//     "body": [
//       "/**@jsxImportSource @emotion/react */",
//       "import * as s from './style';"
//     ],
//     "description": "jsx @emotion/react import"
//   }
// }

// npm install recoil
// npm install react-query
