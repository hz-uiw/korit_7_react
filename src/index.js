import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import RouterDom from './components/RouterDom/RouterDom';
import { RecoilRoot } from 'recoil';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <RecoilRoot>
    <BrowserRouter>
      <App />
    </BrowserRouter>
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