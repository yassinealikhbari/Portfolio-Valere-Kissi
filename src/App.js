import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Showreels from './components/showreels/Showreels';
import Videos from './components/videos/Videos';
import Photos from './components/photos/Photos';
import Service from './components/service/Service';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header></Header>

      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Showreels />
          </Route>
          <Route path="/videos">
            <Videos />
          </Route>
          <Route path="/photos">
            <Photos />
          </Route>
          <Route path="/service">
            <Service />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>

      <Footer></Footer>
    </div>
  );
}

export default App;