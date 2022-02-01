import PropTypes from "prop-types";

import "./StatisticsList.css";

const StatisticsList = ({ label, percentage }) => {
  return (
    <>
      <li className="item">
        <span className="label">.{label}</span>
        <span className="percentage">{percentage}</span>
      </li>
    </>
  );
};

export default StatisticsList;

StatisticsList.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
