import React from 'react';
import { Route, IndexRoute, Redirect } from 'react-router';

import Template from '../../containers/Template';
import Top from '../../containers/Top';

const routes = (
  <Route path="/" component={Template}>
    <IndexRoute component={Top} />
    <Redirect from="*" to="/" />
  </Route>
);

export default routes;
