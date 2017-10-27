import Base from './components/Base.jsx';
import LoginPage from './containers/LoginPage.jsx';
import AdminPage from './containers/AdminPage.jsx';


const routes = {
  // base component (wrapper for the whole application).
  component: Base,
  childRoutes: [

    {
      path: '/',
      component: LoginPage
    },

    {
      path: '/admin',
      component: AdminPage
    }

  ]
};

export default routes;
