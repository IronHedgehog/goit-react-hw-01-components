import PropTypes from "prop-types";
import './UserDescription.css';

const UserDescription = ({username,avatar,location,tag}) => {

    return (
    <div className="description">
    <img
      src={avatar}
      alt="User avatar"
      className="avatar"
    />
    <p className="name">{username}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>  );
}
 
export default UserDescription;

UserDescription.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
}