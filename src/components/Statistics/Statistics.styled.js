import styled from '@emotion/styled';

export const StatList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  color: ${props => props.theme.colors.white};
`;
export const StatItem = styled.li`
  padding: 10px;
  border: ${props => `0.5px solid${props.theme.colors.secondaryText}`};
  width: 50px;
  background-color: ${({ id, theme }) => {
    switch (id) {
      case 'id-1':
        return theme.colors.SkyBlue;
      case 'id-2':
        return theme.colors.DarkOrchid;
      case 'id-3':
        return theme.colors.HotPink;
      case 'id-4':
        return theme.colors.blue;
      case 'id-5':
        return theme.colors.LightSalmon;
      default:
        return theme.colors.black;
    }
  }};
`;
export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
export const Label = styled.span`
  margin-bottom: 8px;
`;
