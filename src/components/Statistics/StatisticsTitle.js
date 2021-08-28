import PropTypes from 'prop-types';

export function StatisticsTitle({ title }) {
  return <h2 class="title">{title}</h2>;
}

StatisticsTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
