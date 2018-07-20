 import React, {Component} from 'react';
 import $ from 'jquery';
 import '../css/jays.css'
 import * as ProjService from '../services/proj-services';


 class GotSole extends Component {
     state = {
         jordans: []
     }

 componentDidMount() {
     ProjService
         .getAll()
         .then(resp => {
             this.setState({jordans: resp.data})
             console.log('data', resp.data)
         }, err => {
             alert('Failed to get all')
         });
}

    render() {
        return (
             <div>
                 <div className='splits'>
                     {this.state.jordans.map((item) =>
                         <React.Fragment key={item.id}>
                             <section className='jordansPic'>
                                 <img src={item.img}/>
                             </section>

                             <section className='jordansHist'>
                                 <h2>{item.model}</h2>
                                 <p>{item.history}</p>
                             </section>
                         </React.Fragment>
                     )}
                 </div>

                     {/* {this.state.jordans.map((item) =>
                         <div key={item.id}>

                             <div className='left'>
                                 {
                                     (item.id % 2 == 0) &&
                                     <section cslassName='section-light'>
                                         <img src={item.img}/>
                                     </section>
                                 }
                                 {
                                     (item.id % 2 !== 0) &&
                                     <section className='section-dark'>
                                         <img src={item.img}/>
                                     </section>
                                 }
                             </div>

                             <div className='right'>
                                 {
                                     (item.id % 2 == 0) &&
                                     <section className='section-dark'>
                                         <h2>{item.model}</h2>
                                         <p>{item.history}</p>
                                     </section>
                                 }
                                 {
                                     (item.id % 2 !== 0) &&
                                     <section className='section-light'>
                                         <h2>{item.model}</h2>
                                         <p>{item.history}</p>
                                     </section>
                                 }
                             </div>
                        </div>
                     )} */}
             </div>
         )
     }
 }
 export default GotSole;
