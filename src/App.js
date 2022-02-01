import "./App.css";
import FriendList from "./components/Friends/friendsList/FriendList.jsx";
import Profile from "./components/profile/Profile/Profile";
import Statistics from "./components/Statistics/StatisticsMain/Statistics";
import TransactionsList from "./components/transactions/transactionsList/TransactionsList";

function App() {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionsList />
    </div>
  );
}

export default App;
