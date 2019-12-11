import React from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { Loader } from './utils/Loader'
import { PrivateRoute } from './utils/PrivateRoute'
import Login from './components/Login';
import {Dashboard} from './components/Dashboard'
import { AddNewFriend } from './components/AddNewFriend';
import { AllFriends } from './components/AllFriends';
import { SoleFriend } from './components/SoleFriend';
import './App.css';

function App({ isLoading }) {
  return (
    <>{isLoading ? <Loader /> :
      <div className="App">
       
        <Route path="/login" component={Login} />
        <PrivateRoute path="/dashboard" component={Dashboard} />
        <PrivateRoute path="/dashboard/addfriend" component={AddNewFriend} />
        <PrivateRoute path="/dashboard/allfriends" component={AllFriends} />
        <PrivateRoute path="/dashboard/solefriend/:id" component={SoleFriend} />

      </div>
    }
    </>
  );
}
const mapStateToProps = (state) => { return { isLoading: state.isLoading } }
export default connect(mapStateToProps, {})(App)
