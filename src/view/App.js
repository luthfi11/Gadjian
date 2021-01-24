import '../styles/App.css';
import { Switch, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import Personnel from './pages/personnel';
import Attendance from './pages/attendance';
import Error from './pages/error';

const handleDrawer = (event) => {
  const drawerElement = document.querySelector('#drawer');
  drawerElement.classList.remove('open');
  event.stopPropagation();
}

const App = () => {

  return (
    <>
      <Navbar />
      <main onClick={handleDrawer}>
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/personnel" component={Personnel} />
          <Route path="/attendance" component={Attendance} />
          <Route component={Error} />
        </Switch>
      </main>
    </>
  );
}

export default App;
