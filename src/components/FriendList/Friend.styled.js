import styled from '@emotion/styled';

export const FriendWrapper = styled.div`
  display: flex;
  align-items: baseline;
`;
export const FriendItems = styled.ul`
    list-style: none;
    margin:0;
    margin-top:20px;
    & :nth-child(5) {
    margin-bottom: 0;
}
  }
`;
export const Item = styled.li`
     width: 250px;
     height: 80px;
     margin-bottom:15px;
     border:${props => `1px solid${props.theme.colors.secondaryText}`};
     border-radius:4px;
     cursor:pointer;
     &:hover,&:focus {
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);}
}
}
`;
export const Status = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0;
  margin-top: auto;
  margin-bottom: auto;
  border-radius: 50%;
  background-color: ${({ id, theme }) => {
    return id ? theme.colors.green : theme.colors.FireBrick;
  }};
`;
export const Name = styled.p`
   margin-top: auto;
   margin-bottom: auto;
   margin-left: 10px;
   font-weight:500;
   font-size:18px;
  }};
`;
export const Avatar = styled.img`
  width:76px
  }};
`;
