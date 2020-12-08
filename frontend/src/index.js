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
import Event from "./components/content/Events/Event";
import Date from "./components/content/Events/Pages/Date";
import Title from "./components/content/Events/Pages/Title";
import DocumentsView from "./components/content/Documents/DocumentsView";
import DocumentView from "./components/content/Documents/DocumentView";
import DocumentCreate from "./components/content/Documents/DocumentCreate";

import UserStore from "./store/UserStore";
import EventStore from "./store/EventStore";
import AuthStore from "./store/AuthStore";
import DocumentStore from "./store/DocumentStore";

import {isAuthenticated}  from './utils/AUTH';


const authStore  = new AuthStore();
const userStore = new UserStore(authStore);
const eventStore = new EventStore();
const documentStore = new  DocumentStore();
const stores = { userStore, authStore, eventStore, documentStore };


ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
          <Provider { ...stores } >
                {
                    !isAuthenticated()
                    && <React.Fragment>
                         <Route exact path='/' component={Login}/>
                        <Route exact path='/login' component={Login}/>
                        <Route exact path='/registration' component={Registration}/>
                </React.Fragment>
                }
              {
                  isAuthenticated()
                  && <div className="App">
                      <Header/>
                      <div className='content'>
                          <Route exact path='/' component={ProfileMain}/>
                          <Route exact path='/my/profile' component={ProfileMain}/>
                          <Route exact path='/my/profile/login' component={ProfileLogin}/>
                          <Route exact path='/my/profile/profile' component={ProfileProfile}/>
                          <Route exact path='/my/profile/pin' component={ProfilePin}/>

                          <Route exact path='/users/assign' component={UsersAssign}/>

                          <Route exact path='/events/browse' component={EventsList}/>
                          <Route exact path='/events/create' component={EventsCreate}/>

                          <Route exact path='/event/:id' component={Event}/>
                          <Route exact path='/event/:id/title' component={Title}/>
                          <Route exact path='/event/:id/date' component={Date}/>
                          <Route exact path='/event/:id/documents' component={DocumentsView}/>
                          <Route exact path='/event/:id/documents/create' component={DocumentCreate}/>
                          <Route exact path='/document/:id' component={DocumentView}/>
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
