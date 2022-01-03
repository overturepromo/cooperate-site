import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Team from './Team'
import Work from './Work'
import Contact from './Contact/index.js'
import Careers from './Careers'
import Privacy from './Privacy'
import Terms from './Terms'
import Error from './Error'
import CoreValues from './Core'
import PPE from './PPE'
import ProtectiveInfo from './ProtectiveInfo';
import CSR from './CSR';
import Diversity from './Diversity';
import Sustainability from './Sustainability';
import Kitting from './Kitting';
import LongKitting from './LongKitting';
import Portal from './Portal';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/about' component={About} />
      <Route path='/team' component={Team} />
      <Route path='/work' component={Work} />
      <Route path='/contact' component={Contact} />
      <Route path='/careers' component={Careers} />
      <Route path='/privacy' component={Privacy} />
      <Route path='/terms' component={Terms} />
      <Route path='/corevalues' component={CoreValues} />
      <Route path='/ppe' component={PPE} />
      <Route path='/protectiveinfo' component={ProtectiveInfo} />
      <Route path='/csr' component={CSR} />
      <Route path='/diversity' component={Diversity} />
      <Route path='/sustainability' component={Sustainability} />
      <Route path='/kitting' component={Kitting} />
      <Route path='/LongKitting' component={LongKitting} />
      <Route path='/Portal' component={Portal} />
      <Route component={Error} />
    </Switch>
  </main>
)

export default Main