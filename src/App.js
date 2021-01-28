import './App.css';
import Header from './components/header/Header';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Showreels from './components/showreels/Showreels';
import Videos from './components/videos/Videos';
import Photos from './components/photos/Photos';
import Service from './components/service/Service';
import Contacts from './components/contacts/Contacts';
import Footer from './components/footer/Footer';
import NotFound from './components/notfound/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div class="header">
          <Header></Header>
        </div>
        <div class="main">
          <Switch>
            <Route exact path="/" component={Showreels} />
            <Route exact path="/home" component={Showreels} />
            <Route exact path="/videos" component={Videos} />
            <Route exact path="/photos" component={Photos} />
            <Route exact path="/service" component={Service} />
            <Route exact path="/contact" component={Contacts} />
            <Route exact path="/404" component={NotFound} />
            <Route exact component={NotFound} />
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