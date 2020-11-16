import './ToolBar.css';
import PropType from 'prop-types';

function ToolBar({ children }) {
  return (
    <div className="ToolBar-container">
      {children}
    </div>
  )
}

ToolBar.propTypes = {
  children: PropType.node.isRequired
}

export default ToolBar;