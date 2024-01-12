import React from "react"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom"

import Login from "../containers/Login"
import Register from "../containers/Register"


function Routes() {

    return (
        <Router>
            <Switch>
                <Route component={Login} path="/login" />
                <Route component={Register} path="/cadastro" />
            </Switch>
        </Router>
    )
}

export default Routes