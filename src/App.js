import './css/App.css';
// Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Components
import SideNavbar from './Components/Navbar/SideNavbar';
import Header from './Components/Header';
import Dashboard from './Components/Dashboard/Dashboard';
import Projects from './Components/Projects/Projects';
import OurCutomers from './Components/OurCutomers/OurCutomers';
import Profile from './Components/Profile/Profile';
import Footer from './Components/Footer';

function App() {
  return (
    <BrowserRouter>
      <div className="container-fluid d-flex p-0">
        <SideNavbar />
        <div className="col-sm-11 col-10">
          <Header />
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/projects" component={Projects} />
            <Route path="/our-customers" component={OurCutomers} />
            <Route path="/profile" component={Profile} />
          </Switch>
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
