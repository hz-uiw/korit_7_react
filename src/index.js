import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';

const root = ReactDOM.createRoot(document.getElementById('root'));

const queryClient = new QueryClient();  // 전역 상태 저장소 생성

// RecoilRoot: 지역안에서의 전역 상태를 만든다 atom 에서 상태를 관리 (Recoil)
// QueryClientProvider: 서버와 통신을 주고 받는 상태를 관리 (QueryClient)
root.render(
  <RecoilRoot>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </QueryClientProvider>
  </RecoilRoot>
);

// root.render(<App />);
// root.render(<App2 />);
// root.render(<App3 />);
// root.render(<App4 />);
// root.render(<App5 />);
// root.render(<App6 />);
// root.render(<App7 />);
// root.render(<App8 />);
// root.render(<App9 />);
// root.render(<App10 />);
// root.render(<App11 />);
// root.render(<App12 />);
// root.render(<App13 />);
// root.render(<App14 />);