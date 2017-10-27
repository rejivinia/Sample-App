import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import {nav, Button, Icon, label, center, main, a, img, span} from 'react-materialize';


const Admin = ({
  onSubmit,
  onChange,
  errors,
  user,
}) => (
<div class = "white-background">
  <nav className="gray" role="navigation">
    <div className="nav-wrapper container navBarHolder">
    <a id="logo-container" href="#" className="brand-logo pageLogo"><img className = "pageLogo" src = "WebContent/images"/></a>
        <ul className="right hide-on-med-and-down">
        <li><a href="#" className = "text-white"><span>Reji Lacanienta | </span> <span>Log out</span></a></li>
        </ul>
      <ul id="nav-mobile" className="side-nav">
        <li><a href="#">Navbar Link</a></li>
      </ul>
      <a href="#" data-activates="nav-mobile" className="button-collapse"><i className="material-icons">menu</i></a>
    </div>
  </nav>
<div className="col s12" id="main-body">
  <div className="row full-height">
    <div className = "col s3 box-shadow bg-green text-white full-height padding-0">
      
  <ul id="" className="">
    <li>
      <div className="sidebar-menu-tab"><i className="material-icons side-bar-icon">group</i> <span className="sidebar-menu-title">Users</span></div>
    </li>
    <li>
      <div className="sidebar-menu-tab"><i className="material-icons side-bar-icon">directions_run</i> <span className="sidebar-menu-title">Workouts</span></div>
    </li>
    <li>
      <div className="sidebar-menu-tab"><i className="material-icons side-bar-icon">accessibility</i> <span className="sidebar-menu-title">Movements</span></div>
    </li>
    <li><div className="divider"></div></li>
  </ul>

    </div>
    <div className = "col s9 full-height" id="form-container">
    <form class="col s12">
    <div class="row"><span> Workouts </span>
    <div class="float-right">
    <a class="btn-floating btn-large waves-effect waves-light green"><i class="material-icons">add</i></a> Add New Workout</div></div>
    <div class="row"><div class="col s7 m4">
    
    <div class="card"><div class="card-image"><img src="http://blog.fuertehoteles.com/wp-content/uploads/2013/11/gym-2.jpg" /><span class="card-title">Workout 1</span></div><div class="card-content"><p>Workout sample description</p></div><div class="card-action"><a href="#">Update</a>
<a href="#">Delete</a></div></div></div><div class="col s7 m4"><div class="card"><div class="card-image"><img src="http://blog.fuertehoteles.com/wp-content/uploads/2013/11/gym-2.jpg" />
<span class="card-title">Workout 1</span></div><div class="card-content"><p>Workout sample description</p></div><div class="card-action">
<a href="#">Update</a><a href="#">Delete</a></div></div></div></div>
  
   </form>
 

    </div>
  </div>
</div>
</div>
);

Admin.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired
};

export default Admin;
