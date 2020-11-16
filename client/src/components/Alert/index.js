import './Alert.css';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Text from '../Text';

function Alert({ text, type }) {
  return (
    <div className={classnames('Alert-container', `Alert-${type}`)}>
      <Text>{text}</Text>
    </div>
  )
}

Alert.propTypes = {
  text: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['warning, error, info'])
}

Alert.defaultProps = {
  type: 'info'
}

export default Alert;