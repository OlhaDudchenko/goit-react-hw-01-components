import { Section } from '../Section/Section';
import { Profile } from '../Profile/Profile';
import { StatisticsList } from '../Statistics/StaticticsList';
// import StatisticsTitle from "../Statistics/StatisticsTitle";
import { FriendList } from '../FriendList/FriendList';
import { TransactionHistory } from '../TransactionHistory/TransactionHistory';
import friends from 'back-end-data/friends';
import statistical from 'back-end-data/statistical-data';
import transactions from 'back-end-data/transactions';
import user from 'back-end-data/user';
import { Wrapper } from './App.styled';

export function App() {
  return (
    <Wrapper>
      <Profile user={user} />
      <Section title="Upload stats">
        <StatisticsList stats={statistical} />
      </Section>

      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </Wrapper>
  );
}
