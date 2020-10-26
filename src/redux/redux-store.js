import { combineReducers, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
<<<<<<< HEAD
import { routerReducer } from 'react-router-redux';
import authReducer from "./auth-reducer";
import userManagementReducer from "./user-management-reducer";
=======
import { routerReducer  } from 'react-router-redux';
import authReducer from "./auth-reducer";
>>>>>>> santiago/feature/test-repo
import errorReduser from "./error-reduser";
import loginReduser from "./login-reduser";

const reducers = combineReducers({
  auth: authReducer,
<<<<<<< HEAD
  userManagement: userManagementReducer,
=======
>>>>>>> santiago/feature/test-repo
  error: errorReduser,
  login: loginReduser,
  routing: routerReducer
});

<<<<<<< HEAD
const store = createStore(
  reducers,
=======

const store = createStore( 
  reducers, 
>>>>>>> santiago/feature/test-repo
  composeWithDevTools(applyMiddleware(thunk))
);
window.store = store;

export default store;