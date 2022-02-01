import friends from "../../../data/friends.json";
import FriendsItem from "../friendsItem/FriendsItem";

import "./friendList.css";

const friendsList = () => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, ...item }) => {
        return <FriendsItem key={id} {...item} />;
      })}
    </ul>
  );
};

export default friendsList;
