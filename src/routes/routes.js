import React from "react"
import { Switch, Route, BrowserRouter as Router} from "react-router-dom"

import { Login, Register, Home, Products, Cart, Admin} from "../containers"
import PrivateRoute from "./private-route"
import paths from "../constants/paths"


function Routes() {

    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/register" />
                <PrivateRoute exact component={Home} path="/" />
                <PrivateRoute component={Products} path="/products" />
                <PrivateRoute component={Cart} path="/cart" />
                <PrivateRoute component={Admin} path={paths.Order} isAdmin />
                <PrivateRoute component={Admin} path={paths.Products} isAdmin />
                <PrivateRoute component={Admin} path={paths.NewProduct} isAdmin />
                <PrivateRoute component={Admin} path={paths.EditProduct} isAdmin />
            </Switch>
        </Router>
    )
}

export default Routes