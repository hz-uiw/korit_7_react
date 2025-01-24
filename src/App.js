import { Route, Routes, useLocation } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import WritePage from './pages/WritePage/WritePage';
import { Global } from '@emotion/react';
import { global } from './styles/global';
import MainLayout from './components/MainLayout/MainLayout';
import ListPage from './pages/ListPage/ListPage';
import SignupPage from './pages/SignupPage/SignupPage';
import SigninPage from './pages/SigninPage/SigninPage';
import axios from 'axios';
import { useQuery } from 'react-query';

function App() {
  // 상태 저장
  const location = useLocation();
  
  const authenticatedUser = async () => {
    return await axios.get("http://localhost:8080/servlet_study_war/api/authenticated", {
      headers: {
        "Authorization": `Bearer ${localStorage.getItem("AccessToken")}`,
      }
    });
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
  } 

  // useQuery로 ["키"], 요청함수(axios), {옵션}을 지정
    // => ["authenticatedUserQuery"]로 authenticatedUser의 함수 return값 axios를 { enabled가 참이면 요청청}
    
  
  const authenticatedUserQuery = useQuery( // userQuery -> useEffect와 비슷하게 사용
    ["authenticatedUserQuery"], // useQuery 변수명을 대괄호 안에 입력
    // 요청 함수
    authenticatedUser,  // 바로 axios에 return해줘야함
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
      retry: 0,
      refetchOnWindowFocus: false,
      enabled: !!localStorage.getItem("AccessToken"),
    }
  );

  console.log(authenticatedUserQuery.isLoading);

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
