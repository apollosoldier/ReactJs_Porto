import React, {Component} from 'react';
import Routes from './Routes';
import Navi from './components/Navbar';
import GotSole from './components/GotSole';

class App extends Component {
  render() {
    return (
      <div>
        <Navi />
        <Routes />  

      </div>
    );
  }
}
export default App;
