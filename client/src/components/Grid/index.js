import './Grid.css';
import PropTypes from 'prop-types';

const genStyle = function (css, style) {
  return {
    flexDirection: css.direction,
    justifyContent: css.justify,
    alignItems: css.alignItems,
    ...style
  };
}

function Grid({ children, direction, justify, alignItems, style }) {
  return (
    <div className="Grid-container" style={genStyle({ direction, justify, alignItems }, style)}>
      {children}
    </div>
  )
}

Grid.propTypes = {
  children: PropTypes.node,
  direction: PropTypes.string,
  justify: PropTypes.string,
  alignItems: PropTypes.string
};

Grid.defaultProps = {
  direction: "row",
  justify: "center",
  alignItems: "center"
};


export default Grid;