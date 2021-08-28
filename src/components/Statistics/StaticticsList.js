import PropTypes from 'prop-types';
import { Statistics } from 'components/Statistics/Statistics';
import { StatList, StatItem } from './Statistics.styled';

export function StatisticsList({ stats }) {
  return (
    <StatList>
      {stats.map(stat => (
        <StatItem key={stat.id} id={stat.id}>
          <Statistics label={stat.label} percentage={stat.percentage} />
        </StatItem>
      ))}
    </StatList>
  );
}

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
