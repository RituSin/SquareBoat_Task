import logo from './logo.svg';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//import { Route as Router } from 'react-router-dom';
import { Route,BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Login_SignUp_Component from './components/login_signup_component/Login_SignUp_Component';
import RecuiterLandingPage from './components/recuter-Section/RecuiterLandingPage';
import CandidateLandingPage from './components/candidate-section/CandidateLandingPage';

function App() {
  return (
    <Router >
       <Route exact path="/" component={Login_SignUp_Component} />
       <Route exact path="/recruiter-portal" component={RecuiterLandingPage} />
       <Route exact path="/candiadte-portal" component={CandidateLandingPage} />
    </Router>
  );
}

export default App;
