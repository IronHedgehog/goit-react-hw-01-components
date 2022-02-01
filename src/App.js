import "./App.css";
import FriendList from "./components/Friends/friendsList/FriendList.jsx";
import Profile from "./components/profile/Profile/Profile";
import Statistics from "./components/Statistics/StatisticsMain/Statistics";

function App() {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
    </div>
  );
}

export default App;
