import React, {Component} from 'react';
import $ from 'jquery';
import '../css/intro.css'
import {Link} from 'react-router-dom';

class Intro extends Component{   

    acceptref = (elem) => {
        $(elem).find('li').each((i,li)=>{            
            const px = Math.random() * 250 - 125;
            const py = Math.random() * 250 - 125;
            //                             back tags
            $(li).css('transform', `translate(${px}px, ${py}px)`)
        });
        setTimeout(function() {
            $(elem).addClass('start-fly-in')
        }, 0);     
        
        $(".blinking-text").hide();

        setTimeout(()=> {blinker()}, 1900);
        
        const blinker = () =>{    
            $('.blinking-text').fadeIn(1000);               
            $('.blinking-text').fadeOut(1000);                                                 
        }
        setInterval(blinker, 1500)

    };

    render() {
        return (               
            <div>
                <Link to='/home'>  

                <div className='bodyclick'>                
                    <ul ref={this.acceptref} className='fly-in-text'>
                        <li>G</li>
                        <li>R</li>
                        <li>E</li>
                        <li>A</li>
                        <li>T</li>
                        <li>N</li>
                        <li>E</li>
                        <li>S</li>
                        <li>S</li>
                    </ul>    

                     <div className='blinking-text click'>Click To Enter</div>                                                                                
                </div>    

                </Link>   
            </div>               
        );
    }
}
export default Intro;