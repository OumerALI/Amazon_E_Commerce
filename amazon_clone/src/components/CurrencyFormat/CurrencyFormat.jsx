import PropTypes from "prop-types";
import numeral from "numeral";

const CurrencyFormat = ({ amount = 0 }) => {
  // Ensure the amount is formatted correctly
  const formattedAmount = numeral(amount).format("$0,0.00");

  return (
    <span aria-label={`Price: ${formattedAmount}`}>{formattedAmount}</span>
  );
};

CurrencyFormat.propTypes = {
  amount: PropTypes.number, // Validates that `amount` is a number
};

export default CurrencyFormat;
