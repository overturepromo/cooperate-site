import React from 'react';
import { Link } from 'react-router-dom'
import ArrowRight from '../../images/home/up_arrow.svg'
import '../../styles/Home.css'

const Work = () => {
    return (
        <div>
            <div className="words-overlay">
                <span className='big-words'>promo experts.</span>
                <div className="container green-words-box">
                    <span className="small-green-words">What we do</span>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-9">
                        <p className="home-descriptions">Overture is an award-winning agency that develops effective promotional marketing programs for businesses of all sizes, including many of the world's largest brands. Our unconventional approach and full suite of in-house services allow us to give you a personalized promotional marketing program that is effortless, efficent and coast-effective.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Link to="/work">
                        <p className="arrow">See our work 
                            <span>
                                <img src={ArrowRight} style={{marginLeft: '5px', marginBottom: '2px'}} alt="arrow" />
                            </span>
                        </p>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work
