import React, { Component } from 'react'
import { Route, Redirect } from "react-router-dom"

const PrivateRoute = ({ component: Component, ...erthingElse }) => (
    <Route
        {...erthingElse}
        render={(_ => (localStorage.getItem('token')) ? (<Component />) : (<Redirect to='/login' />))}
    />
)
export default PrivateRoute