import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Team from './Team'
import Work from './Work'
import Contact from './Contact/index.js'
import Careers from './Careers'
import Privacy from './Privacy'
import Error from './Error'
import CoreValues from './Core'
import PPE from './PPE'


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
      <Route path='/corevalues' component={CoreValues} />
      <Route path='/devserver5001' component={PPE} />
      <Route component={Error} />
    </Switch>
  </main>
)

export default Main