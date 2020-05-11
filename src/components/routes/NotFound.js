// Dependencies
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Helmet} from 'react-helmet';

// Stylesheets
import style from 'components/routes/NotFound.module.scss';

class NotFound extends Component {
  render() {
    return (<div className={style.contentSection}>
      <Helmet>
        <title>404 - Siden finnes ikke - Villa Norangdal</title>
        <meta name="prerender-status-code" content="404" />
      </Helmet>
      <h1>404 - Siden finnes ikke</h1>
    </div>)
  }
}

export default connect(null, null)(NotFound);
