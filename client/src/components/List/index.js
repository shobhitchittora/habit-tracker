import './List.css';
import PropTypes from 'prop-types';

function List({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

function ListItem() {
  return (
    <div>
      {'Item x'}
    </div>
  )
}

List.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.exact(ListItem)
};


ListItem.propTypes = {
  children: PropTypes.string | PropTypes.node
};

export default Object.assign(List, { ListItem });