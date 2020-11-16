import './Input.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';

function Input({ className, value, onBlur, onFocus, onChange, placeholder, type }) {
  return (
    <input
      className={classnames(className, 'Input')}
      value={value}
      onFocus={onFocus}
      onBlur={onBlur}
      onChange={onChange}
      placeholder={placeholder}
      type={type}
    />
  )
}

Input.propTypes = {
  className: PropTypes.string,
  value: PropTypes.string.isRequired,
  onBlur: PropTypes.func,
  onFocus: PropTypes.func,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

export default Input;