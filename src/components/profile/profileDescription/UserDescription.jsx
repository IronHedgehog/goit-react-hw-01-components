import PropTypes from "prop-types";
import s from "./UserDescription.module.css";

const UserDescription = ({ username, avatar, location, tag }) => {
  return (
    <div className={s.description}>
      <img src={avatar} alt="User avatar" className={s.avatar} />
      <p className={s.name}>{username}</p>
      <p className={s.tag}>@{tag}</p>
      <p className={s.location}>{location}</p>
    </div>
  );
};

export default UserDescription;

UserDescription.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};
