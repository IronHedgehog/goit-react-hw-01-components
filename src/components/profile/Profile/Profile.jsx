

import user from "../../../data/user.json";
import UserDescription from "../profileDescription/UserDescription";
import ProfileStats from "../ProfileStats/ProfileStats";
import  './Profile.css';

const Profile = () => {
    const {stats,...userData } = user
    return ( <div className="profile">
    
  <UserDescription {...userData}/>
    <ProfileStats {...stats}/>
  </div>);
}
 
export default Profile;