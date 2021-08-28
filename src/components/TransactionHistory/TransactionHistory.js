import PropTypes from 'prop-types';
import { Transaction } from 'components/TransactionHistory/Transaction';
import {
  TransactionWrapper,
  TransactionTitle,
  TitleText,
  TransactionTable,
} from './Transaction.styled';

export function TransactionHistory({ items }) {
  return (
    <TransactionWrapper>
      <TransactionTitle>
        <TitleText>Type</TitleText>
        <TitleText>Amount</TitleText>
        <TitleText>Currency</TitleText>
      </TransactionTitle>

      <TransactionTable>
        {items.map(({ id, type, amount, currency }) => (
          <Transaction
            key={id}
            id={id}
            type={type}
            amount={amount}
            currency={currency}
          />
        ))}
      </TransactionTable>
    </TransactionWrapper>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }),
  ),
};
