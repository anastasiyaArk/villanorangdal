// Dependencies
import React from 'react';
import PropTypes from 'prop-types';

// Stylesheets
import style from 'components/partials/Button.module.scss';

class Button extends React.Component {
  render() {
    return (<button {...this.props} className={`${style.button} ${style[this.props.buttontype]}`}>
      <span className={style.content}>{this.props.children}</span>
    </button>)
  }
};

Button.propTypes = {
  buttontype: PropTypes.oneOf(['minimal', 'default'])
};

Button.defaultProps = {
  buttontype: 'default'
};

export default Button;
