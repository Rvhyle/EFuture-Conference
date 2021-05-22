import NavBar from './Components/NavComponent';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/homepage';
import Footer from './Components/Footer';
import FoodPage from './Pages/foodpage';
import locationpage from './Pages/locationpage';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/food' component={FoodPage} />
        <Route exact path='/location' component={locationpage} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
