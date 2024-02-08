import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Posts from './Components/Posts/Posts';
import Post from './Components/Post/Post';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<h1 className='main-body'>HomePage</h1>}/>
      <Route path="/posts" element={<div><Posts/></div>}/>
      <Route path="/post/:id" element={<div><Post/></div>}/>
      <Route path="/contact" element={<h1>Contacts</h1>}/>
      <Route path="/developers" element={<h1>developers</h1>}/>
    </Routes>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
