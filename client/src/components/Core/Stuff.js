import React from 'react';

import Larry from '../../images/core/larry.jpg';
import Rainbow from '../../images/core/overturerainbow.jpg';

const Stuff = () => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8">
                    <span className='big-words-video'>our community.</span><br />
                    <div className='green-words-box-core'>
                        <span className="small-green-words-core">How we make a difference.</span>
                        <p className="stuff-text">We call ourselves "The 595 Family" and we're always looking for way to serve together. We pack meals for children in developing nations, write letters to veterans overseas to send with candy and swag, create gorgeous valentines for seniors and hospitalized children.</p>
                        <p className="stuff-text">And with two warehouse full of swag, we have lots of opportunities to donate unsed inventory to local charities (always with your prior approval). Our employees donate generously to the "Overture Family Fund," so we can give grants to teammates who need a hand.</p>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="larry-div">
                        <img src={Larry} className="larry-img" alt="larry" />
                    </div>
                    <div className="rainbow-div">
                        <img src={Rainbow} className="rainbow-img" alt="braclets" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stuff;