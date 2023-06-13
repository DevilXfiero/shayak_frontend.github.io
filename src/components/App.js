import React from 'react';
import Myform from './Myform';
import Login from './Login'
import Homepage from './Homepage';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import aboutus from './aboutus';
import Guide from './Guide';



function App()
{
 return (
 <BrowserRouter >
    <Switch>
      <Route exact path="/" component={Homepage}/>
      <Route exact path="/login" component={Login} />          
      <Route exact path="/Aboutus" component={aboutus}/>
      <Route exact path="/guide"  component={Guide}/>
      
    </Switch>
  </BrowserRouter>
 );
}

export default App;