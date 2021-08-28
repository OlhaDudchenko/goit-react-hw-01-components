import styled from '@emotion/styled';

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
`;
export const ProfileWrapper = styled.div`
  width: 45vw;
`;
export const Stats = styled.ul`
  display: flex;
  justify-content: center;
  & :not(:last-child) {
    margin-right: 5px;
  }
`;
export const StatsItem = styled.li`
  width: 50px;
  display: flex;
  flex-direction: column;
  border: ${props => `1px solid${props.theme.colors.secondaryText}`};
  padding: 10px;
`;
export const StatsText = styled.span`
  font-size: 14px;
  text-align: center;
  color: ${props => props.theme.colors.secondaryText};
`;
export const StatsQuantity = styled.span`
  font-size: 15px;
  font-weight: 500;
  text-align: center;
`;
export const Location = styled.p`
  font-size: 15px;
  margin: 0;
  margin-bottom: 20px;
  color: ${props => props.theme.colors.secondaryText};
`;
export const Tag = styled.p`
  font-size: 15px;
  color: ${props => props.theme.colors.secondaryText};
`;
export const Name = styled.p`
  font-size: 15px;
  font-weight: 500;
`;
