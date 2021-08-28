import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendList/FriendListItem';
import { FriendItems, Item } from './Friend.styled';

export function FriendList({ friends }) {
  return (
    <FriendItems>
      {friends.map(({ avatar, name, isOnline, id }) => (
        <Item key={id}>
          <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
        </Item>
      ))}
    </FriendItems>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    }),
  ),
};
