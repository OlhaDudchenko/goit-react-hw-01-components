import styled from '@emotion/styled';

export const TransactionWrapper = styled.table`
  margin-top: 20px;
  width: 250px;
  border: ${props => `0.5px solid${props.theme.colors.LightGrey}`};
`;
export const TransactionTitle = styled.thead`
  background-color: ${props => props.theme.colors.blue};
  color: ${props => props.theme.colors.white};
`;
export const TitleText = styled.th`
  padding: 10px;
`;
export const TransactionTable = styled.tbody`
  color: ${props => props.theme.colors.secondaryText};
`;
export const TransactionItem = styled.tr`
  &:nth-child(2n) {
    background-color: ${props => props.theme.colors.LightGrey};
  }
`;
