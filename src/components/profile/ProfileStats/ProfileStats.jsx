import PropTypes from "prop-types";
import './ProfileStats.css'

const ProfileStats = ({followers,likes,views}) => {

    return (  
        <ul className="stats">
        <li>
          <span className="label">Followers</span>
          <span className="quantity">{followers}</span>
        </li>
        <li>
          <span className="label">Views</span>
          <span className="quantity">{likes}</span>
        </li>
        <li>
          <span className="label">Likes</span>
          <span className="quantity">{views}</span>
        </li>
      </ul>);
}
 
export default ProfileStats;

ProfileStats.propTypes = {
    followers: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
}