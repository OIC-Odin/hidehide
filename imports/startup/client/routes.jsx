import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import { render } from 'react-dom';
import Register from '../../ui/layouts/Register.jsx';
import EnrollAccount from '../../ui/layouts/EnrollAccount.jsx';
import SignIn from '../../ui/layouts/SignIn.jsx';
import Top from '../../ui/layouts/Top';

Meteor.startup( () => {
  render(
    <Router history={ browserHistory }>
      <Route path="/" component={Top}/>
      <Route path="register" component={Register}/>
      <Route path="enroll-account/:token/:language" component={EnrollAccount}/>
      <Route path="sign-in" component={SignIn}/>
    </Router>,
    document.getElementById( 'react-root' )
  );
});
