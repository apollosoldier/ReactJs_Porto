import React, {Component} from 'react';
import '../css/home.css';

class Home extends Component {

    render() {
        return (
            <div>
            
                <div className="bg1">                    
                    <div className="ptext">
                        {/* <span className="border trans">
                            NEW YORK CITY
                        </span> */}
                    </div>
                </div>

                <section className="section section-light">
                    <div className="col sqs-col-6">
                        <h2 className="ExpTitle">EXPERIENCE</h2>
                        <p className="ExpBody">
                            After graduation, I was fortunate to have different work experience in different industries, I worked during 4 years:
                        </p>                        

                        <ul className="ExpPast"> 
                            <li> 
                                Worked as a .NET Fullstack Developer for startup Babel Dabble in Culver City, CA
                            </li>
                            <li>
                                Performed financial analysis of over 120 loan portfolio for Pacific City Bank
                            </li>
                            <li> 
                                Analyzed and planned new software implementation to increase SEO effectiveness and efficiency for Tiverity
                            </li>
                            <li>
                                Built custom stored procedures to extract, update, and compile over 30,000 datasets for Ista North America
                            </li>
                        </ul>                
                    </div>
                    
                    <div className="row">
                        <div className="col sqs-col-4">                            
                            <i className="profile-icons fa fa-commenting-o"></i>
                            <br />
                            <strong>Languages I Speak:</strong>
                            <div className="profile-contents"> 
                                Native Korean, Fluent English, Limited-Survival Japanese.
                            </div>                            
                        </div>

                        <div className="col sqs-col-4">
                            <i className="profile-icons fa fa-keyboard-o"></i>
                            <br />
                            <strong>Areas of expertise:</strong>
                            <div className="profile-contents"> 
                                .NET Fullstack Development: AngularJS, React, C#, SQL. 
                            </div>
                        </div>

                        <div className="col sqs-col-4">
                            <i className="profile-icons fa fa-clock-o"></i>
                            <br />
                            <strong>Where I see myself in 5 years:</strong>
                            <div className="profile-contents"> 
                                Happily engaged in projects that excite me, working among smart and supportive people, and still learning new things
                            </div>
                        </div>                       
                    </div>
                    <br/>
                   <p>
                    Want to check my full resume?
                    <a className="resume" href="">Download it here</a>
                    </p>       
                </section>

                <div className="bg2">
                    <div className="ptext">
                        {/* <span className="border trans">
                            ATLANTA
                        </span> */}
                    </div>
                </div>

                <section className="section section-light">
                    <h4 className="text-align-center">When I'm not working, you can find me ...</h4>

                    <div className="row">
                        <div className="col sqs-col-4">
                            <i className="profile-icons fa fa-heart-o"></i>
                            <div className="profile-contents"> 
                                Learning new things (currently self-learning Mean Stack), listening to jazz or drinking coffee.
                            </div>
                        </div>

                        <div className="col sqs-col-4">
                            <img className="dancing-icons" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAANrSURBVGhD3dpJyE1xGMfxl8wimZJkVsYVokwrC7KQSClKCq9CKUNCWRhKKUWIhWKBwoIsDEUyRGRjxQILkTllnr4/OXk8Pfe83dc99/6vX32S85577/+55/zPf3jfhgplDq7iPd7gFEajrrIVPwKfMBN1kamIisi8RU8kn2OICrCWI/ncRdR4aw+SzxVEjbe2IflsQNR4awqST2fcR1SAnEDdZACuwxbwHYfQEXWVFpiEFViCocgyCHOxCRN0oB6iq6NRfjvO4zXslfqGhUgu6iPrcQ4vYRtdSlPF6GruxmZ00IFq5CiixjYlKqYV1uEDsvP2ovD0gxpkG1gOW8xI3IQ/5wIKzxb4D86jGfFTd0zFHIYmmPa4fMR0FBrdBk/gPzyPRvhh8MVEbmMUCs8sRA3Ik01V8orRldFsQV9UVaKnVNSQPHbOFRVTyFXI+0YGwnbyd7BPmlL85FHFqIPrFtUjvOJXYRe+Qt/YcSzDcGj0VjTY2QYehJa39ljkX2bBGq/OQPO6eziN+WiJMJpORI2QZ1Bhz80xGYuiC9EtF73nEWRf8F/pBj32ohdF7kCpVSEyA2G0DtdApB2R6IXWUijVKmQfdJtrgroaD6BbOzdtMRkbcRG+MN1qnaBUq5DGX//7E83Fyn5fW5geCCOQpVaFKL1+/1uR1LKQiua/KET9JJr0ec0pZAjWYCf0HoUWoqm4b3Sk3ELmwQ8FhRZyCfbDJFotllOIpivabvXvobV/IekP7ZjYD/sCbZPaY1JOIdp9+Qz7+lfogUKiR7H9MNF+sFZ8/ni5t9YiaKzSBPUaxqCQaI4Tbc6NR3v4K9Wczl6VaI/KNlRuIctj2J8lW8h+2IbKAmTxD4EkC2kHPwhqgdQGWQ7A/jzJQvQYtI0UrbVt1sL+PMlCtKCxjdTA1R02s2HPOYtwEVTL+OWuBi/dbjbRBt5KJBXtz/rHq66Azw7YczQnG4ekchm2kSfh0xoazOx5D9EVyUSTOttA9ZMu8OkLP/fSLkgy/UUrRr+jomlFFG0Q+FtR0/Nkkq0TMlrbl4rvL5pcTkQS8Z1eT6neiKL+or9XscU8go4nEd/pV6FU1F9ewJ7fB0nEd/obyMs0ZCs//TY4mfhOr9ulqQyGfomj6X5Syf4CQpvfi3WgnqOtTE1LapCGhp+BwFT2y+55fAAAAABJRU5ErkJggg==" alt="a"/>

                            <div className="profile-contents"> 
                                Breakdancing(b-boying) and practicing hand letterting to feel energized and relaxed
                                <br/>
                                Check my hand <a className="lettering"  target="_bank" href="https://www.instagram.com/koffeenpen/"> lettering.</a>
                            </div>
                        </div>

                        <div className="col sqs-col-4">
                            <i className="profile-icons fa fa-cutlery" aria-hidden="true"></i>
                            <div className="profile-contents"> 
                                Always down to try new food and you can always bribe me with Korean-BBQ.
                            </div>
                        </div>
                    </div>

                </section>

                {/* <div className="bg3">
                    <div className="ptext">
                        <span className="border trans">
                            SEOUL CITY
                        </span>
                    </div>
                </div> */}

                <section id='contact' className="section section-light">
                    <div className='contactbody'>
                        <h2>CONTACT</h2>
                        <p>
                            Let's run the dance floor, talk new design, draft an idea on Sketch, and belt 90s R&B jams.
                        </p>
                    </div>
                    <br />
                    <div className='contactBtn'>
                        <button type="button" className="email btn btn-outline-dark" data-toggle="modal" data-target="#email-me">>
                            Send me an email !
                        </button>
                    </div>

                    <div id="email-me" className="modal fade">
                        <div className="modal-dialog" role="document">
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="email-me">Contact</h5>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">     </button>
                                </div>
                                <div className="modal-body">
                                    ...
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary">Send</button>
                                </div>
                            </div>
                        </div>
                    </div>                                         
                </section>    

            </div>
        );
    }
}
export default Home;

