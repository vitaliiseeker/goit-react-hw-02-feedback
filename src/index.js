import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
// import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


// import theme from './theme';
// import { GlobalStyle } from 'theme/GlobalStyle';

//   <React.StrictMode>
//     <ThemeProvider theme={theme}>
//       <GlobalStyle />
//       <App />
//     </ThemeProvider>
//   </React.StrictMode>
// );