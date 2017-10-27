import React from 'react';
import ReactDom from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { BrowserRouter, Route, IndexRoute, Link, Switch, Redirect } from 'react-router-dom'
import routes from './routes.js';
import LoginPage from './containers/LoginPage.jsx';
import AdminPage from './containers/AdminPage.jsx';
// import { createHashHistory } from 'history'

// export const history = createHashHistory()

// remove tap delay, essential for MaterialUI to work properly
injectTapEventPlugin();

ReactDom.render((
  <MuiThemeProvider muiTheme={getMuiTheme()}>
    <BrowserRouter>
    	<div className="bg-green-dark">
			<Switch>
			   <Route path='/WodBody/login' component={LoginPage} />
			   <Route path='/WodBody/admin' component={AdminPage} />
			   <Redirect to='/WodBody/login' />
			</Switch>
    	</div>
    </BrowserRouter>
  </MuiThemeProvider>), document.getElementById('react-app'));
