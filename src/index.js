import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';



// inject react code index.html 'root' div.
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// // same as above when you import ReactDOM from react-dom/client
// // this method is "outdated" as of React 18.
// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
