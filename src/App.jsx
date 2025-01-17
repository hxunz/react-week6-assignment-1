import React from 'react';

import {
  Switch,
  Route,
  Link,
} from 'react-router-dom';

import HomePage from './HomePage';
import AboutPage from './AboutPage';
import RestaurantsPage from './RestaurantsPage';
import detailPage from './detailPage';
import NotFoundPage from './NotFoundPage';

export default function App() {
  return (
    <div>
      <h1>
        <Link to="/">헤더 영역</Link>
      </h1>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/restaurants" component={RestaurantsPage} />
        <Route path="/restaurants/" component={detailPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}
