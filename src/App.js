import Layout from './components/layout'
import Navbar from './components/navbar'
import Main from './components/main'

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

const routes = [
  {
    path: '/',
    exact: true,
    name: 'home',
    content: 'Yo'
  },
  {
    path: '/posts',
    name: 'posts',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
  },
  {
    path: '/about',
    name: 'about',
    content: 'Nullam commodo gravida dolor, ac sagittis quam imperdiet quis. Proin efficitur'
  },
];

function App() {
  return (
    <Router basename="/ralph">
      <Layout>
        <Navbar menuItems={routes} />
        <Switch>
          {
            routes.map((route, index) => (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                children={<Main children={route.content}/>}
              />
            ))
          }
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
