import PropTypes from 'prop-types';
import {
  Avatar,
  ProfileWrapper,
  Stats,
  StatsItem,
  StatsText,
  StatsQuantity,
  Location,
  Tag,
  Name,
} from './Profile.styled';

export function Profile({ user }) {
  const { name, tag, location, avatar, stats } = user;
  const { followers, views, likes } = stats;
  return (
    <ProfileWrapper>
      <div class="description">
        <Avatar src={avatar} alt="Аватар пользователя" />
        <Name>{name}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </div>

      <Stats>
        <StatsItem>
          <StatsText>Followers</StatsText>
          <StatsQuantity>{followers}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Views</StatsText>
          <StatsQuantity>{views}</StatsQuantity>
        </StatsItem>
        <StatsItem>
          <StatsText>Likes</StatsText>
          <StatsQuantity>{likes}</StatsQuantity>
        </StatsItem>
      </Stats>
    </ProfileWrapper>
  );
}

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.number.isRequired,
};
