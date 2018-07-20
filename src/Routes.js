import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Intro from './components/Intro';
import Home from './components/Home';
import Projects from './components/Projects';
import Skills from './components/Skills';
// import Contact from './components/Contact';
// import GotSole from './components/GotSole';
import Photos from './components/Photos';

class Routes extends Component {
    render() {
        return (
            <div>
                <Switch>                   
                    <Route exact path='/intro' component={Intro}/>
                    <Route exact path='/home' component={Home}/>
                    <Route exact path='/projects' component={Projects}/>
                    <Route exact path='/skills' component={Skills}/>
                    {/* <Route exact path='/contact' component={Contact}/>  */}
                    {/* <Route exact path='/gotsole' component={GotSole} />        */}
                    <Route exact path='/photos' component={Photos}/> 
                </Switch> 
            </div>
        )
    }
}
export default Routes;