import React from 'react';
import PropTypes from 'prop-types';
import LoginForm from '../components/LoginForm.jsx';
import { BrowserRouter, Route, Link , Redirect} from 'react-router-dom'


class LoginPage extends React.Component {

  /**
   * Class constructor.
   */
  constructor(props) {
    super(props);

    // set the initial component state
    this.state = {
      errors: {},
      user: {
        email: '',
        password: ''
      }
    };

    this.processForm = this.processForm.bind(this);
    this.changeUser = this.changeUser.bind(this);
  }

  


  /**
   * Process the form.
   *
   * @param {object} event - the JavaScript event object
   */
  processForm(event) {
    // prevent default action. in this case, action is the form submission event
    event.preventDefault();

    // create a string for an HTTP body message
    const email = this.state.user.email;
    const password = this.state.user.password;
    const formData = JSON.stringify({
                                  "email": email,
                                  "password":password
                                });

    this.props.history.push({
                pathname: '/WodBody/admin'
              });

  //   // create an AJAX request
  //   const xhr = new XMLHttpRequest();
  //   xhr.open('post', 'http://ec2-18-220-143-177.us-east-2.compute.amazonaws.com:3000/login');
  //   xhr.setRequestHeader('Content-type', 'application/json');
  //   xhr.responseType = 'json';
  //   xhr.addEventListener('load', () => {
  //     if (xhr.status === 200) {
  //       // success
  //         console.log(xhr.response.error);
  //         console.log(xhr.response.user.id);
  //         console.log(xhr.response.message);
  //         this.props.history.push({
  //               pathname: '/WodBody/admin',
  //               state: {
  //                 id: xhr.response.user.id,
  //                 token: xhr.response.token
  //               }
  //             });

  //        // <Redirect to="/WodBody/admin" /> //change this after dev testing
  //       // change the component-container state
  //       // this.setState({
  //       //   errors: {}
  //       // });

  //       console.log('The form is valid');
  //     } else {
  //       // failure

  //       // change the component state
  //       const errors = xhr.response.errors ? xhr.response.errors : {};
  //       errors.summary = xhr.response.message;

  //       this.setState({
  //         errors
  //       });
  //     }
  //   });
  //   xhr.send(formData);
  }

  /**
   * Change the user object.
   *
   * @param {object} event - the JavaScript event object
   */
  changeUser(event) {
    const field = event.target.name;
    const user = this.state.user;
    user[field] = event.target.value;

    this.setState({
      user
    });
  }

  /**
   * Render the component.
   */
  render() {
    return (
      <LoginForm
        onSubmit={this.processForm}
        onChange={this.changeUser}
        errors={this.state.errors}
        user={this.state.user}
      />
    );
  }

}

export default LoginPage;
