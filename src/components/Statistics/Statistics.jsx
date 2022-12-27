import css from './Statistics.module.css';
import PropTypes from 'prop-types';

// import NotificationMessage from './NotificationMessage';
const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <ul className={css.statisticsList}>
      <li>
        <p>Good:{good}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Neutral:{neutral}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Bad:{bad}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Total:{total}</p>
      </li>
      <li className={css.statisticsItem}>
        <p>Positive feedback:{Math.round(positivePercentage)}%</p>
      </li>
    </ul>
  );
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercentage: PropTypes.number,
};
export default Statistics;
