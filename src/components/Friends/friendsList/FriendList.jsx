import friends from "../../../data/friends.json";
import FriendsItem from "../friendsItem/FriendsItem";

import s from "./friendList.module.css";

const friendsList = () => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ id, ...item }) => {
        return <FriendsItem key={id} {...item} />;
      })}
    </ul>
  );
};

export default friendsList;
