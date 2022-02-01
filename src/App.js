import "./App.css";
import FriendList from "./components/Friends/friendsList/FriendList.jsx";
import Profile from "./components/profile/Profile/Profile";
import Statistics from "./components/Statistics/StatisticsMain/Statistics";
import TransactionsList from "./components/transactions/transactionsList/TransactionsList";

import Container from "./components/container/Container.jsx";
function App() {
  return (
    <Container>
      <Profile />
      <Statistics />
      <FriendList />
      <TransactionsList />
    </Container>
  );
}

export default App;
