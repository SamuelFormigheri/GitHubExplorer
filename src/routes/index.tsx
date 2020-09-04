import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Repository from '../pages/Repository';


const Routes: React.FC = () => {
  return (
      <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route exact path="/repository/:repository+" component={Repository}/>
      </Switch>
  );
}

export default Routes;