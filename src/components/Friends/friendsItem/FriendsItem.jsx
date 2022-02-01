import PropTypes from "prop-types";
import { FriendsStatus } from "./friendsItem.styled";
import "./friendsitem.css";

const FriendsItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="item">
      <FriendsStatus isOnline={isOnline}>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{name}</p>
      </FriendsStatus>
    </li>
  );
};

export default FriendsItem;

FriendsItem.propTypes = {
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
// className="status"
