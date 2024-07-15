import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import routes from './routes/routes'; 
import Layout from './layout/Layout';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
        {routes.map(({ route, element }, index) => (
          <Route key={index} path={route} element={element} />
        ))}
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
