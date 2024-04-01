import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';

import Header from './header';
import Search from './search';
import Image from './image';
import Center from './center';
import Footer from './footer';
const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <div>
 <Header></Header>
 <Search></Search>
 <Image></Image>
 <Center></Center>
 <Footer></Footer>
 
 
  </div>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

