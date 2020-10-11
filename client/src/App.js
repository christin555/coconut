import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Home from "./components/content/Home/Home";
import Registration from "./components/content/Registration/Registration";
import ProfileMain from "./components/content/Users/Profile/ProfileMain";
import ProfileLogin from "./components/content/Users/Profile/Pages/Login";
import ProfileProfile from "./components/content/Users/Profile/Pages/Profile";
import ProfilePin from "./components/content/Users/Profile/Pages/Pin";
import UsersAssign from "./components/content/Users/UsersAssign";
import EventsList from "./components/content/Events/EventsList";
import EventsCreate from "./components/content/Events/EventsCreate";
import EventView from "./components/content/Events/EventView";

import {Route} from "react-router-dom";


const App = () => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <div className='content'>
                <Route exact path='/' component={Home}/>
                <Route exact path='/registration' component={Registration}/>

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
    );
}

export default App;
