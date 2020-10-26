import React from 'react';
import './App.scss';
import Authorization from './components/Authorization/AuthorizationContainer';
<<<<<<< HEAD
import UserInterfaceContainer from './components/UserInterface/UserInterfaceContainer';

const App = (props) => {
  return (
    <div className="App" >
      <div className="container">
        <UserInterfaceContainer />
        <Authorization />
      </div>
=======
import MainPage from './components/CRM/MainPage/MainPage';
import { useSelector } from 'react-redux';

const App = (props) => {
  const isAuth = useSelector(state => state.auth.isAuth);
  return (
    <div className="App" >
      {isAuth ? <MainPage /> : <Authorization />}
>>>>>>> santiago/feature/test-repo
    </div>
  );
}

export default App;
