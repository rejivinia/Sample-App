import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
// import { Card, CardText } from 'material-ui/Card';
// import RaisedButton from 'material-ui/RaisedButton';
// import TextField from 'material-ui/TextField';
import {Button, Icon, label, center, main} from 'react-materialize';


const LoginForm = ({
  onSubmit,
  onChange,
  errors,
  user
}) => (
<div className="container">
  <div className="section"></div>
  <main>
    <center>
      <div className="section"></div>

      <h3 className="white-text">WodBody - Admin</h3>
      <div className="section"></div>

      <div className="container">
      <form action="/admin" onSubmit={onSubmit}>
        <div className="z-depth-1 grey lighten-4 row inline-block">
            <div className='row'>
              <div className='col s12'>
              {errors.summary && <p className="error-message">{errors.summary}</p>}
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input floatingLabelText="Email"
        name="email"
        errorText={errors.email}
        onChange={onChange}
        value={user.email} className='validate' type='email' id='email' />
                <label title='email'>Enter your email</label>
              </div>
            </div>

            <div className='row'>
              <div className='input-field col s12'>
                <input className='validate' id='password'  floatingLabelText="Password"
          type="password"
          name="password"
          onChange={onChange}
          errorText={errors.password}
           value={user.password}/>
                <label title='password'>Enter your password</label>
              </div>
             <label className='float-right'>
                <a className='green-text' ><b>Forgot Password?</b></a>
              </label>
            </div>

            <br />
            <center>
              <div className='row'>
                <button id="btn-login" className='col s12 btn btn-large green' type='submit'>Login</button>
              </div>
            </center>
        </div>
        </form>
      </div>
           // <a href="#!">Create account</a> 
    </center>

    <div className="section">
      <div className="row">
        <div className = 'col-s4 bg-green'></div>
        <div className = 'col-s8'></div>
      </div>
    </div>
    <div className="section"></div>
  </main>

</div>


  // <Card className="container">
  //   <form action="/" onSubmit={onSubmit}>
  //     <h2 className="card-heading">Login</h2>

  //     {errors.summary && <p className="error-message">{errors.summary}</p>}

  //     <div className="field-line">
  //       <TextField
  //         floatingLabelText="Email"
  //         name="email"
  //         errorText={errors.email}
  //         onChange={onChange}
  //         value={user.email}
  //       />
  //     </div>

  //     <div className="field-line">
  //       <TextField
  //         floatingLabelText="Password"
  //         type="password"
  //         name="password"
  //         onChange={onChange}
  //         errorText={errors.password}
  //         value={user.password}
  //       />
  //     </div>

  //     <div className="button-line">
  //       <RaisedButton type="submit" label="Log in" primary />
  //     </div>

  //     // <CardText>Don't have an account? <Link to={'/signup'}>Create one</Link>.</CardText>
  //   </form>
  // </Card>
);

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default LoginForm;
