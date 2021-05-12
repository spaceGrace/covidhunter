import { useSelector } from 'react-redux';
import { Header, Title, Layout, List } from './components';

const App = () => {
//@ts-ignore
  const reports = useSelector(state => state.reports);

  return (
    <Layout>
      <Header>
        <Title>COVID HUNTER</Title>
      </Header>
      <List items={reports} />
    </Layout>
  )
}

export default App
