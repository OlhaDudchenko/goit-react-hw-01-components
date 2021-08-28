import PropTypes from 'prop-types';
import { ItemWrapper, Label } from './Statistics.styled';

export function Statistics({ label, percentage }) {
  return (
    <ItemWrapper>
      <Label>{label}</Label>
      <span class="percentage">{percentage}</span>
    </ItemWrapper>
  );
}

Statistics.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
