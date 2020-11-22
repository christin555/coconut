import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Redirect, Route} from "react-router-dom";
import {Provider} from "mobx-react";

import Header from "./components/Header";
import Home from "./components/content/Home";
import Registration from "./components/auth/Registration/Registration";
import Login from "./components/auth/Login";
import ProfileMain from "./components/content/Users/Profile/ProfileMain";
import ProfileLogin from "./components/content/Users/Profile/Pages/Login";
import ProfileProfile from "./components/content/Users/Profile/Pages/Profile";
import ProfilePin from "./components/content/Users/Profile/Pages/Pin";
import UsersAssign from "./components/content/Users/UsersAssign";
import EventsList from "./components/content/Events/EventsList";
import EventsCreate from "./components/content/Events/EventsCreate";
import EventView from "./components/content/Events/EventView";

import UserStore from "./store/UserStore";
import AuthStore from "./store/AuthStore";

const authStore  = new AuthStore();
const userStore = new UserStore(authStore);
const stores = { userStore, authStore };
const isAuth = localStorage.token;

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
          <Provider { ...stores } >
                {!isAuth && <React.Fragment>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/registration' component={Registration}/>
                </React.Fragment>
                }
              {isAuth
              && <div className="App">
                      <Header/>
                      <div className='content'>
                          <Route exact path='/' component={Home}/>
                          <Route exact path='/my/profile' component={ProfileMain}/>
                          <Route exact path='/my/profile/login' component={ProfileLogin}/>
                          <Route exact path='/my/profile/profile' component={ProfileProfile}/>
                          <Route exact path='/my/profile/pin' component={ProfilePin}/>

                          <Route exact path='/users/assign' component={UsersAssign}/>

                          <Route exact path='/events/browse' component={EventsList}/>
                          <Route exact path='/events/create' component={EventsCreate}/>
                          <Route exact path='/event/view' component={EventView}/>

                      </div>
                  </div>
              }
            </Provider>
        </React.StrictMode>
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
