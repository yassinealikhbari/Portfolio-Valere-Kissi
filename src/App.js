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
      <BrowserRouter>
        <div class="header">
          <Header></Header>
        </div>
        <div class="main">
          <Switch>
            <Route path="/" exact component={Showreels} />
            <Route path="/home" exact component={Showreels} />
            <Route path="/videos" exact component={Videos} />
            <Route path="/photos" exact component={Photos} />
            <Route path="/service" exact component={Service} />
            <Route path="/contact" exact component={Contacts} />
          </Switch>
        </div>
      </BrowserRouter>
      <div class="footer">
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;