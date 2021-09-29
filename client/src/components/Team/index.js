import React from 'react';
import { Switch, Route } from 'react-router-dom';
import {Helmet} from 'react-helmet';
import Hero from './Hero'
import JumpAround from './JumpAround';
import Board from './Board';
import Acquisition from './Acquisition';
import Management from './Management';
import Experts from './Experts';
import Sales from './Sales';
import ECommerce from './ECommerce';
import Creative from './Creative';
import Operations from './Operations';
import DevIT from './DevIT';
import Embrodiery from './Embrodiery';
import Warehouse from './Warehouse';
import Mantra from '../Contact/Mantra'


const index = () => {
    return (
        <div>
            <Helmet>
                <title>Meet the Team | Creative Gurus & Swag Industry Experts</title>
                <meta 
                    name="description" 
                    content="We’re promotional marketing and branding experts. We’re creative curators. We're innovators. We’re problem solvers. Meet our talented, weird-is-cool family." 
                />
            </Helmet>
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
                <Route path='/team/board' component={Board} />
                <Route path='/team/acquisition' component={Acquisition} />
                <Route path='/team/management' component={Management} />
                <Route path='/team/devit' component={DevIT} />
                <Route path='/team' component={Experts} />                
            </Switch>
            <Mantra />
        </div>
    )
}



export default index;