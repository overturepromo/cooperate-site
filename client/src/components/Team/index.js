import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Hero from './Hero'
import JumpAround from './JumpAround';
import Experts from './Experts';
import Sales from './Sales';
import ECommerce from './ECommerce';
import Creative from './Creative';
import Operations from './Operations';
import Embrodiery from './Embrodiery';
import Warehouse from './Warehouse';
import SubFooter from '../SubFooter';


const index = () => {
    return (
        <div>
            <Hero />
            <JumpAround />
            <Switch>
                <Route path='/team/sales' component={Sales} />
                <Route path='/team/e-commerce' component={ECommerce} />
                <Route path='/team/creative' component={Creative} />
                <Route path='/team/operations' component={Operations} />
                <Route path='/team/embrodiery' component={Embrodiery} />
                <Route path='/team/warehouse' component={Warehouse} />
                <Route path='/team/experts' component={Experts} />
                <Route path='/team' component={Experts} />                
            </Switch>
            <SubFooter />
        </div>
    )
}


export default index;