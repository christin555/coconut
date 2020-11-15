import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route} from "react-router-dom";
import {Provider} from "mobx-react";
import Header from "./components/Header";
import Home from "./components/content/Home";
import UserStore from "./store/UserStore";

const stores = { UserStore };

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
          <Provider { ...stores }>
                <div className="App">
                    <Header/>
                    <div className='content'>
                        <Route exact path='/' component={Home}/>

                    </div>
                </div>
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
