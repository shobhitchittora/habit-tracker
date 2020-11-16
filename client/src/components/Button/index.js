import './Button.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Button({ onClick, children, large }) {
  return (
    <button className={classnames('Button', large && 'Button-large')} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.string | PropTypes.node,
  large: PropTypes.bool
};

export default Button;