import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';


export default class HomePage extends React.Component {
    render(){
            return (<Redirect to="WodBody/login" />)
    }
}
