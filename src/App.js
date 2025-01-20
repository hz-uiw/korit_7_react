import { Route, Routes } from 'react-router-dom';
import IndexPage from './pages/IndexPage/IndexPage';
import WritePage from './pages/WritePage/WritePage';
import { Global } from '@emotion/react';
import { global } from './styles/global';

function App() {
  return (
    <>
      <Global styles={global}/>

      <Routes>
        <Route path='/' element={<IndexPage />} />
        <Route path='/write' element={<WritePage />}/>
      </Routes>
    </>
  );
}

export default App;
// npm install react-router-dom
// npm install @emotion/react