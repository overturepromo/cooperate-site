import React from 'react';
import Close from '../../../images/home/close.svg';

const Take = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Live Proud, Maintain Humility</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">"I work hard, and I tend to play hard. I very seldom rest hard." - Jacqueline Bisset</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">Maybe there's a happy little Evergreen that lives here. If you didn't have baby clouds, you wouldn't have big clouds. Exercising the imagination, experimenting with talents, being creative; these things, to me, are truly the windows to your soul. There's not a thing in the world wrong with washing your brush. Nothing's gonna make your husband or wife madder than coming home and having a snow-covered dinner. You have to make those little noises or it won't work.</p>
           <p className="values-paragraph">A thin paint will stick to a thick paint. You don't want to kill all your dark areas they are very important. There are no mistakes. You can fix anything that happens.</p>
           <p className="values-paragraph">We'll put some happy little leaves here and there. Maybe there's a happy little bush that lives right there. Let's make some happy little clouds in our world. Give him a friend, we forget the trees get lonely too.</p>
        </div>
    )
}

const styles= {
    orange: {
        height: '2px',
        width: '50px',
        backgroundColor: '#ef7521',
        marginBottom: '20px'
    }
}

export default Take;