import PropTypes from 'prop-types';
import { FriendWrapper, Status, Avatar, Name } from './Friend.styled';

export function FriendListItem({ avatar, name, isOnline }) {
  return (
    <FriendWrapper>
      <Status id={isOnline}></Status>
      <Avatar src={avatar} alt={name} width="48" />
      <Name>{name}</Name>
    </FriendWrapper>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
