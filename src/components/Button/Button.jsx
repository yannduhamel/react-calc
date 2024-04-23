import "./Button.scss";
import PropTypes from "prop-types";

function Button({ symbol }) {
  return <div className="calculatorButton">{symbol}</div>;
}

Button.propTypes = {
  symbol: PropTypes.string.isRequired,
};

export default Button;
