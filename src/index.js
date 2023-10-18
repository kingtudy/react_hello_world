import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const anotherElement = ReactDOM.createRoot(document.getElementById('anotherElement'));
// root.render(
//   <React.StrictMode>
//       <h1>Hello world</h1>
//   </React.StrictMode>
// );

var smthICanChange = 2;
const aLotOfStuff = "<h1>" + smthICanChange + "</h1>";

root.render(<h1>This is a fucking test</h1>);
anotherElement.render("<div>This is another fucking test with smth dynamic:</div>" + aLotOfStuff);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();