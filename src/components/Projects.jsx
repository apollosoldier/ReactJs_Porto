import React, {Component} from 'react';
import '../css/projects.css'

import {Link} from 'react-router-dom';

class Projects extends Component {

    render(){
        return(
            <div className='projects'>   

                <div id="particle-container">
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                    <div className="particle"></div>
                </div>

                <div className='row'>            
                    <div className="cards col-xs-4 flip-container">
                        <div className="flipper gotsole">
                            <div className="front well">
                                <div className="card-body">
                                    <img className="card-img-top" src={'https://i.ebayimg.com/images/g/8JQAAOSwNnRYmg81/s-l300.jpg'} alt="Got Sole?" />
                                    <h3 className="card-title">GOT SOLE?</h3>
                                    <p className="card-text">Quick look of original Jordan Shoes Series</p>
                                </div>
                            </div>
                            <div className="back well">
                                <div className="card-body">
                                    <h3 className="card-title">SKILLS</h3>
                                    <p className="card-text">What was used:</p>
                                    <ul>
                                        <li>Bootstrap</li>
                                        <li>C#; Web-scraping</li>
                                        <li>SQL 2016</li>
                                    </ul>
                                    <Link to='/gotsole'>Check it out!</Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards col-xs-4 flip-container">
                        <div className="flipper">
                            <div className="front well">
                                <div className="card-body">
                                {/* <img className="card-img-top" src="..." alt="stuff" /> */}
                                    <h3 className="card-title">Project TBD</h3>                                
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="back well">
                                <div className="card-body">
                                    <h3 className="card-title">SKILLS</h3>
                                    <p className="card-text">What was used:</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="cards col-xs-4 flip-container">
                        <div className="flipper">
                            <div className="front well">
                                <div className="card-body">
                                {/* <img className="card-img-top" src="..." alt="stuff 2" /> */}
                                    <h3 className="card-title">Project TBD2</h3>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                </div>
                            </div>
                            <div className="back well">
                                <div className="card-body">
                                    <h3 className="card-title">SKILLS</h3>
                                    <p className="card-text">What was used:</p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>           
        );
    }
}
export default Projects;