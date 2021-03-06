import React from 'react';
import i18n from 'meteor/universe:i18n';
import { Link } from 'react-router';
export default class Top extends React.Component {
  render() {
    return (
      <div>
        <div className='top-box'>
          <h1>{ i18n.getTranslation('top', 'title1') }</h1>
          <h1>{ i18n.getTranslation('top', 'title2') }</h1>
          <h3>{ i18n.getTranslation('top', 'subTitle') }</h3>
        </div>
        <div className='top-button'>
          <Link to='sign-in' className='sign-in button-style top-button-padding'>{ i18n.getTranslation('top', 'signIn') }</Link>
        </div>
      </div>
    );
  }
}
