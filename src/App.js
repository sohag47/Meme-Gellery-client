import { BrowserRouter as Router } from 'react-router-dom';
import NavigationBar from './router_navigation/NavigationBar';
import RouterURL from './router_navigation/RouterURL';
import Footer from './router_navigation/Footer';


function App() {
  return (
    <>
      <Router>
        <NavigationBar />
          <RouterURL />
          <Footer />
      </Router>
    </>
  );
}

export default App;
